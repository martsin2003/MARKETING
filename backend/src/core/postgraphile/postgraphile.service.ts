import jwt = require('jsonwebtoken');
import { Injectable } from '@nestjs/common';
import { PostgraphilePlugin } from './postgraphile-plugin.interface';
import { GraphQLSchema, print } from 'graphql';
import * as config from 'config';
import postgraphile from 'postgraphile';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { makeRemoteExecutableSchema, introspectSchema } from 'graphql-tools';
import fetch from 'node-fetch';
import { get } from 'lodash';
import ConnectionFilterPlugin = require('postgraphile-plugin-connection-filter');

@Injectable()
export class PostgraphileService {
  plugins: PostgraphilePlugin[] = [];

  private schema: Promise<GraphQLSchema>;

  constructor() {
    this.createInternalServer();
    this.schema = this.getSchemaPromise();
  }

  addPlugin(plugin: PostgraphilePlugin) {
    this.plugins.push(plugin);
  }

  addPlugins(plugins: PostgraphilePlugin[]) {
    plugins.forEach(plugin => this.addPlugin(plugin));
  }

  async getSchema(): Promise<GraphQLSchema> {
    return this.schema;
  }

  private async getSchemaPromise(): Promise<GraphQLSchema> {
    const fetcher = async ({
      query: queryDocument,
      variables,
      operationName,
      context,
    }) => {
      let userId = null;
      const authorization = get(
        context,
        'graphqlContext.req.headers.authorization',
        null,
      );
      console.log('authorization: ', authorization);
      if (authorization) {
        const data: any = jwt.decode(authorization.split(' ')[1], {
          complete: true,
        });
        userId = data.payload.id;
      }
      const query = print(queryDocument);
      console.log('query: ', query);
      const fetchResult = await fetch(
        `http://localhost:${config.get('postgraphile.internalPort')}/graphql`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'user-id': userId,
          },
          body: JSON.stringify({ query, variables, operationName }),
        },
      );
      return fetchResult.json();
    };

    try {
      const pgSchema = makeRemoteExecutableSchema({
        schema: await introspectSchema(fetcher),
        fetcher,
      });

      return pgSchema;
    } catch (e) {
      console.log(e);
    }
  }

  private createInternalServer() {
    const port = config.get('postgraphile.internalPort') as string;

    const internalApp = express();
    internalApp.use(bodyParser.json());
    internalApp.use(
      postgraphile(process.env.DATABASE_URL, 'public', {
        pgSettings: req => {
          const userId = req.headers['user-id'];
          return Promise.resolve({
            role: 'brookfield_clone',
            ...(userId ? { 'jwt.claims.user_id': String(userId) } : {}),
          });
        },
        classicIds: true,
        appendPlugins: [ConnectionFilterPlugin],
        graphiql: true,
        graphileBuildOptions: {
          connectionFilterComputedColumns: false,
          connectionFilterSetofFunctions: false,
          connectionFilterLists: false,
        },
      }),
    );

    internalApp.once('error', err => {
      if (err.code === 'EADDRINUSE') {
        console.log(err);
      }
    });
    const server = internalApp.listen(port, () => {
      console.log(
        `postgraphile server listening on port ${config.get(
          'postgraphile.internalPort',
        )}`,
      );
    });
    // todo remove later when tables count will be decreased, required to start backend without timeout(default timeout 2 minutes)
    server.timeout = 1000000;

    process.on('SIGTERM', () => {
      console.info('SIGTERM signal received.');
      server.close();
    });
  }
}
