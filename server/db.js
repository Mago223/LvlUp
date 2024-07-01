const { Pool } = require('pg');
require('dotenv').config(); // This loads the .env file and sets the environment variables

const pool = new Pool({
  connectionString : process.env.DATABASE_URL
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
