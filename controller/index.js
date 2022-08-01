// Queries needed
module.exports.queries = {

  // GET
  // get all questions
  getQuestionsTest: `SELECT * from questions limit 2`,

  // get all answers
  getAnswersTest: `SELECT * from answers limit 2`,

  // get all answers_photos
  getPhotosTest: `SELECT * from answers_photos limit 2`,

  // get all products
  getProductsTest: `SELECT * from products limit 2`,


  // POST
  // POST /qa/questions
  postQuestion: (params) => {
    `INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpful)
     VALUES(?, ?, ?, ?, ?, ?, ?)`;
  },

  // POST /qa/questions/:question_id/answers
  // postAnswer:
  //   `INSERT INTO answers(question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
  //    VALUES(?, ?, ?, ?, ?, ?, ?)`,


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
  // SET column1 = value1, column2 = value2, ...
  // WHERE condition;


};
