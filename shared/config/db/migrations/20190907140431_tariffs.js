
exports.up = function(knex) {
  return knex.schema.raw(`
  CREATE TABLE IF NOT EXISTS tariffs (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v1mc(),
    created_at timestamp NOT NULL,
    key text NOT NULL,
    province text NOT NULL,
    country text NOT NULL,
    archived_at timestamp,
    archived_by jsonb
  );
`);
};

exports.down = function(knex) {
  return knex.schema.raw(`
  DROP TABLE IF EXISTS tariffs;
`);
};
