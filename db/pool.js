const { Pool } = require('pg');
require('dotenv').config();

const isRailwayInternal =
  process.env.DATABASE_URL &&
  process.env.DATABASE_URL.includes('railway.internal');

const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: isRailwayInternal ? false : { rejectUnauthorized: false }
      }
    : {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
      }
);

module.exports = pool;