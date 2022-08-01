

const { answersQuery } = require('../database/index.js');
const { queries } = require('../controller/index.js');

// Standard setup
const express = require('express');
const app = express();
app.use(express.json());


// GET  /qa/questions
app.get('/qa/questions', (req, res) => {
  answersQuery(queries.getQuestionsTest)
      .then((result) => {
        console.log(result.rows); // delete/refactor later
        res.status(200).send(result.rows);
      })
      .catch((err) => console.log("Error getting Questions, ", err))
  ;
});

// GET  /qa/questions/:question_id/answers
app.get('/qa/questions/:question_id/answers', (req, res) => {
  answersQuery(queries.getAnswers)
      .then((result) => {
        console.log(result.rows); // delete/refactor later
        res.status(200).send(result.rows);
      })
      .catch((err) => console.log("Error getting Answers: ", err))
  ;
});


// POST /qa/questions
// app.post('/qa/questions', (req, res) => {
//   mainQuery.query(queries.postQuestion)
//     .then((result) => {
//       console.log(result.rows); // delete/refactor later
//       res.status(200).send(result.rows);
//     })
//     .catch((err) => console.log("Error getting Answers", err))
//     ;
// });


// POST /qa/questions/:question_id/answers
app.post('/qa/questions/:question_id/answers', (req, res) => {
  // [product_id, body, date_written, asker_name, asker_email, reported, helpful]

  // var postQuestions = function () {
  //   `INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpful)
  //    VALUES(?, ?, ?, ?, ?, ?, ?)`;
  // };


  mainQuery.query(queries.postQuestion())
      .then((result) => {
        console.log(result.rows); // delete/refactor later
        res.status(200).send(result.rows);
      })
      .catch((err) => console.log("Error posting Answers: ", err))
  ;
});


// PUT  /qa/questions/:question_id/helpful
// PUT  /qa/questions/:question_id/report
// PUT  /qa/answers/:answer_id/helpful
// PUT  /qa/answers/:answer_id/report

// Are we sending req.rows because it's the result of a SQL statement?
// res.body would be... ?

const port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
