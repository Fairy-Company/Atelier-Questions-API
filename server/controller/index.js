/* eslint-disable no-multiple-empty-lines */
/* eslint-disable camelcase */
// Queries needed
const { questionsQuery } = require('../../database/index.js');
module.exports.queries = {

  // GET
  // get all questions
  getQuestionsTest: (req, res) => {
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
        limit 5`;

    questionsQuery(queryStr)
        .then((result) => {
          // console.log(result.rows); // delete/refactor later
          res.status(200).send(result.rows[0]);
        })
        .catch((err) => console.log("Error getting Questions, ", err))
    ;
  },



  // get all answers
  getAnswersTest: `SELECT * from answers limit 5`,

  // get all answers_photos
  getPhotosTest: `SELECT * from answers_photos limit 5`,

  // get all products
  getProductsTest: `SELECT * from products limit 5`,


  // POST
  // POST /qa/questions
  postQuestion: (params) => {
    `INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpful)
     VALUES(?, ?, ?, ?, ?, ?, ?)`;
  },

  // POST /qa/questions/:question_id/answers
  postAnswer: (params) => {
    `INSERT INTO answers(question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
     VALUES(?, ?, ?, ?, ?, ?, ?)`;
  },


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


// EXAMPLE query
// const IbraheemGetProduct = (product_id) => {
//   const IbraheemsString =
//     `SELECT p.product_id AS id, p.campus, p.name, p.slogan, p.description,
//   p.category, p.default_price::numeric, p.created_at, p.updated_at,
//   ARRAY_AGG (
//     json_build_object('feature', f.feature, 'value', f.value)
//   ) features
//   FROM products p
//   JOIN features f
//   ON p.product_id = f.product_id
//   WHERE p.product_id = ${productID}
//   GROUP BY p.product_id;
//   `;
//   return (
//     pool
//       .query(IbraheemsString)
//       .catch("ERROR")
//   )
// };


// EXAMPLE DATA

// {
//   "product_id": "40480",
//   "results": [
//       {
//           "question_id": 330344,
//           "question_body": "Officiis commodi aut et rerum qui quia deleniti ab eligendi.",
//           "question_date": "2020-09-07T00:00:00.000Z",
//           "asker_name": "Mohamed91",
//           "question_helpfulness": 28,
//           "reported": false,
//           "answers": {
//               "3086367": {
//                   "id": 3086367,
//                   "body": "Occaecati dolor maiores qui.",
//                   "date": "2021-03-01T00:00:00.000Z",
//                   "answerer_name": "Bethel_Casper",
//                   "helpfulness": 7,
//                   "photos": []
//               },
//               "3086368": {
//                   "id": 3086368,
//                   "body": "Dolorum omnis aut.",
//                   "date": "2020-08-27T00:00:00.000Z",
//                   "answerer_name": "Nikki_Barton",
//                   "helpfulness": 10,
//                   "photos": [
//                       "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
//                   ]
//               },
//               "3086369": {
//                   "id": 3086369,
//                   "body": "Optio quia impedit ut ipsam sunt.",
//                   "date": "2021-05-30T00:00:00.000Z",
//                   "answerer_name": "Lexus_Stiedemann56",
//                   "helpfulness": 17,
//                   "photos": []
//               },
//               "3086370": {
//                   "id": 3086370,
//                   "body": "Ullam soluta sapiente ut.",
//                   "date": "2020-12-24T00:00:00.000Z",
//                   "answerer_name": "Joshua.Becker13",
//                   "helpfulness": 11,
//                   "photos": []
//               },
//               "3086371": {
//                   "id": 3086371,
//                   "body": "Aut dolores occaecati voluptates.",
//                   "date": "2021-01-23T00:00:00.000Z",
//                   "answerer_name": "Roma0",
//                   "helpfulness": 13,
//                   "photos": [
//                       "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//                   ]
//               }
//           }
//       }
//   ]
// }