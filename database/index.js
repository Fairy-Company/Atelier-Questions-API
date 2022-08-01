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


exports.questionsQuery = () => {
  const queryStr = queries.getQuestionsTest;
  console.log(queryStr);
  return client.query(queryStr);
};


exports.answersQuery = () => {
  const queryStr = queries.getAnswersTest;
  console.log(queryStr);
  return client.query(queryStr);
};

// exports.photosQuery = () => {
//   const queryStr = queries.getAnswersTest;
//   console.log(queryStr);
//   return client.query(queryStr);
// };


// exports.productsQuery = () => {
//   const queryStr = queries.getAnswersTest;
//   console.log(queryStr);
//   return client.query(queryStr);
// };
