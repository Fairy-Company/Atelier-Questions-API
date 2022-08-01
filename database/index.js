const { Client } = require('pg');
const { queries } = require('../controller/index.js');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  // port: 7777,
  password: 'postgres',
});

client.connect();

// const mainQuery = {
//   query: (text, params) => {
//     return client.query(text, params);
//   },
// };

exports.answersQuery = () => {
  const queryStr = queries.getAnswersTest;
  console.log(queryStr);
  return client.query(queryStr);
};

exports.getQuestion = () => {

};
