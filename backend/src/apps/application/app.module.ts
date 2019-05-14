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


@Module({
  imports: [
    TypeOrmModule.forRoot({      
      type: 'postgres',
      host: config.get<string>('database.host'),
      port: config.get<number>('database.port'),
      username: config.get<string>('database.username'),
      password: config.get<string>('database.password'),
      database: config.get<string>('database.database'),
      entities: [
        __dirname + `/../../../src/core/model/entities/*.ts`
      ],
      synchronize: false,
      keepConnectionAlive: true
    }),
    GraphQLModule.forRootAsync({
      imports: [
        PostgraphileModule,
        AuthModule
      ],
      useFactory: (
        postgraphileService: PostgraphileService,
        moduleRef: ModuleRef
      ) => {
        return {
          context: ({ req }) => ({ req }),
          typePaths: [__dirname + '/**/*.graphql'],
          installSubscriptionHandlers: true,
          transformSchema: async (localSchema: GraphQLSchema) => {
            console.log(11111)
            const graphileSchema = await postgraphileService.getSchema();
            console.log(22222)
            const graphqlFactory = moduleRef.get(GraphQLFactory);
            const delegates = graphqlFactory.createDelegates();
            const schemas = [localSchema];
            schemas.push(graphileSchema);
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
