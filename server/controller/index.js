/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable camelcase */

// Queries needed
const { qaQuery } = require('../../database/index.js');

module.exports.queries = {

  // GET
  // get all questions
  getQuestions: (req, res) => {
    const { product_id } = req.query;
    const queryStr =
      `SELECT CAST(q.product_id as varchar(5)),

      ARRAY_AGG (
        json_build_object(
          'question_id', q.id,
          'question_body', q.body,
          'question_date', q.date_written,
          'asker_name', q.asker_name,
          'question_helpfulness', q.helpful,
          'reported', CAST(q.reported as BOOLEAN),

          'answers',
            json_build_object(
              CAST(a.id as varchar(10)),
              json_build_object(
                'id', a.id,
                'body', a.body,
                'date', a.date_written,
                'answerer_name', a.answerer_name,
                'helpfulness', a.helpful,
                'photos', 'none yet'
                )
              )

          )) results

        FROM questions q
        JOIN answers a ON a.question_id = q.id
        WHERE q.product_id = ${product_id}
        GROUP BY q.product_id

        limit 1000`;

    qaQuery(queryStr)
        .then((result) => {
          res.send(result.rows[0]);
        })
        .catch((err) => console.log("Error getting Questions, ", err))
    ;
  },

  // get all answers --- NEW ---
  getAnswers: (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const { question_id } = req.query;
    const queryStr = `SELECT * from answers limit 5`;

    qaQuery(queryStr)
        .then((result) => {
          // console.log(result.rows); // delete/refactor later
          res.status(200).send(result.rows);
        })
        .catch((err) => console.log("Error getting Answers: ", err))
    ;

  },

  // get all answers_photos
  // getPhotosTest: `SELECT * from answers_photos limit 5`,

  // get all products
  // getProductsTest: `SELECT * from products limit 5`,

  // POST
  // POST /qa/questions
  // postQuestion: (params) => {
  //   `INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpful)
  //    VALUES(?, ?, ?, ?, ?, ?, ?)`;
  // },

  // POST /qa/questions/:question_id/answers
  // postAnswer: (params) => {
  //   `INSERT INTO answers(question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
  //    VALUES(?, ?, ?, ?, ?, ?, ?)`;
  // },

};


// PUT
// PUT  /qa/questions/:question_id/helpful
// questionHelpful:
//   `
//   `,

// PUT  /qa/questions/:question_id/report
// reportQuestion:
//   `
//   `,

// PUT  /qa/answers/:answer_id/helpful
// answerHelpful:
//   `
//   `,

// PUT  /qa/answers/:answer_id/report
// reportAnswer:
//   `
//   `,

// UPDATE table_name
// SET column1 = value1, column5 = value5, ...
// WHERE condition;
