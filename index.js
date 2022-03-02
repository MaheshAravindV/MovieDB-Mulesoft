const { Pool } = require("pg"); // Library for DB connection

const connectionString = `postgres://postgres:${process.env.DBPASS}@localhost:5432/movies`; // DB Password is stored as a environment variable

// Structure of connectionString - 'postgress://username:password@address:port/dbname'

const pool = new Pool({
  connectionString,
});

const query = "SELECT * from movies"; // Querying all movies

pool
  .query(query)
  .then((result) => {
    for (row of result.rows) {
      console.log(row);
    }
    process.exit(); // For some reason it is not quitting out and keeps waiting
  })
  .catch((err) => console.log(err)); // Handling exception
