import { CommunitiesModule } from './communities/communities.module';
import { AuthModule } from './auth/auth.module';
import { PostgraphileService } from './../../core/postgraphile/postgraphile.service';
import { PostgraphileModule } from './../../core/postgraphile/postgraphile.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { GraphQLSchema } from 'graphql';
import { mergeSchemas } from 'graphql-tools';
import { ModuleRef } from '@nestjs/core';
import * as config from 'config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyTimeTourModule } from './my-time-tour/my-time-tour.module';

@Module({
  imports: [
    MyTimeTourModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.get<string>('database.host'),
      port: config.get<number>('database.port'),
      username: config.get<string>('database.username'),
      password: config.get<string>('database.password'),
      database: config.get<string>('database.database'),
      entities: [__dirname + `/../../../src/core/model/entities/*.ts`],
      synchronize: false,
      keepConnectionAlive: true
    }),
    GraphQLModule.forRootAsync({
      imports: [PostgraphileModule, AuthModule, CommunitiesModule],
      useFactory: (postgraphileService: PostgraphileService, moduleRef: ModuleRef) => {
        return {
          context: ({ req }) => ({ req }),
          typePaths: [__dirname + '/**/*.graphql'],
          installSubscriptionHandlers: true,
          transformSchema: async (localSchema: GraphQLSchema) => {
            const graphqlFactory = moduleRef.get(GraphQLFactory);
            const delegates = graphqlFactory.createDelegates();
            const schemas = [localSchema];
            const graphileSchema = await postgraphileService.getSchema();
            if (graphileSchema) {
              schemas.push(graphileSchema);
            }
            return mergeSchemas({
              schemas,
              resolvers: delegates
            });
          }
        };
      },
      inject: [PostgraphileService, ModuleRef]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
