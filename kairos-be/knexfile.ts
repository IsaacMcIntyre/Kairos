import dotenv from 'dotenv';
import { Knex } from 'knex';
import { types } from 'pg';

dotenv.config();

// Parse TIMESTAMP (OID: 1114) into JavaScript Date
types.setTypeParser(1114, (str: string) => new Date(str));

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};

export default config;
