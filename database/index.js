/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
const { Client } = require('pg');
// const { queries } = require('../server/controller/index.js');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  // port: 7777,
  password: 'postgres',
});

client.connect();

exports.questionsQuery = (text, params) => {
  // console.log(text, params); // Delete later
  return client.query(text, params);
};



// exports.answersQuery = () => {
//   console.log(queries.getAnswersTest); // Delete later
//   return client.query(queries.getAnswersTest);
// };


// exports.postAnswer = () => {

// };

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
