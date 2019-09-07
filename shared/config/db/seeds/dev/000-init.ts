import * as Knex from 'knex';

const clearData = async (knex: Knex) => {
  console.log('Clearing existing data...');

  const result = await knex.raw(`
    SELECT
      CONCAT(table_schema, '.', table_name) AS table_name
    FROM information_schema.tables
    WHERE table_schema IN ('public', 'wallet_engine')
      AND table_name NOT LIKE 'knex%';
  `);

  const tableNames = result.rows.map((r: any) => r.table_name);

  if (tableNames.length > 0) {
    await knex.raw(`TRUNCATE TABLE ${tableNames.map(() => '??').join(',')}`, [...tableNames]);
  }
};

exports.seed = async (knex: Knex) => {
  await clearData(knex);
};
