const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
});

client.connect();

const query = `SELECT * FROM questions limit 1`;

// client.query(query, (err, res) => {
//   // const result = [];
//   if (err) {
//     console.log("ERROR");
//   }
//   console.log(res.rows);
// });

client
    .query(query)
    .then((res) => console.log(res.rows[0]))
    .catch((err) => console.log("ERROR"))
;
