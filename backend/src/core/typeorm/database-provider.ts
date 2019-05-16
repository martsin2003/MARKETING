import { DB_CONNECTION_TOKEN } from './constants';
import { createConnection, getConnectionManager } from 'typeorm';
import * as config from 'config';

// TODO: migrate to using the connection created by the nest/typeorm module (defined in app.module.ts)
export default {
  provide: DB_CONNECTION_TOKEN,
  useFactory: async () => {
    try {
      return getConnectionManager().get('CustomConnection');
    } catch (e) {
      console.log(config.get<string>('database.host'));
      console.log(config.get<string>('database.port'));
      console.log(config.get<string>('database.username'));
      console.log(__dirname);
      return createConnection({
        name: 'CustomConnection',
        type: 'postgres',
        host: config.get<string>('database.host'),
        port: config.get<number>('database.port'),
        username: config.get<string>('database.username'),
        password: config.get<string>('database.password'),
        database: config.get<string>('database.database'),
        entities: [__dirname + `/../../../src/core/model/entities/*.ts`]
      });
    }
  }
};
