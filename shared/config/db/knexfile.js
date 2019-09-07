const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

let connectionString = process.env.DATABASE_URL;
let seedDirectory = '/seeds/prod';

if (!['development', 'test'].includes(process.env.NODE_ENV)) {
  connectionString = connectionString + '?ssl=true';
} else if (process.env.NODE_ENV === 'development') {
  seedDirectory = '/seeds/dev';
} else if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.TEST_DATABASE_URL;
  seedDirectory = '/seeds/test';
}

module.exports = {
  client: 'pg',
  connection: connectionString,
  migrations: {
    directory: path.join(__dirname, '/migrations'),
  },
  seeds: {
    directory: path.join(__dirname, seedDirectory),
  },
  pool: {
    idleTimeoutMillis: 30000,
    min: 0,
    max: 10,
  },
  debug: !!process.env.DB_DEBUG,
};

// Generic structure
// const database = knex({
//   client: "pg", // pg is the database library for postgreSQL on knexjs
//   connection: {
//     host: "127.0.0.1", // Your local host IP
//     user: "postgres", // Your postgres user name
//     password: "your_password", // Your postrgres user password
//     database: "simple_api" // Your database name
//   }
// });
