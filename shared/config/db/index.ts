import * as knex from 'knex';
import * as config from './knexfile';
import { types } from 'pg';

types.setTypeParser(1114, value => {
  return value && new Date(value + '+00');
});

export const db = knex(config);
