-- Creates database and adds tables needed

CREATE TABLE questions(
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  body VARCHAR(500),
  date_written BIGINT,
  asker_name VARCHAR(50),
  asker_email VARCHAR(50),
  reported INTEGER,
  helpful INTEGER
);

CREATE TABLE answers(
  id INTEGER PRIMARY KEY,
  question_id INTEGER,
  body VARCHAR(500),
  date_written BIGINT,
  answerer_name VARCHAR(50),
  answerer_email VARCHAR(50),
  reported INTEGER,
  helpful INTEGER
);

CREATE TABLE answers_photos(
  id INTEGER PRIMARY KEY,
  answer_id INTEGER,
  url VARCHAR(500)
);

CREATE TABLE products(
  id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  slogan VARCHAR(500),
  description VARCHAR(500),
  category VARCHAR(50),
  default_price INTEGER
);


-- Designate Keys
ALTER TABLE questions ADD FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE answers ADD FOREIGN KEY (question_id) REFERENCES questions(id);
ALTER TABLE answers_photos ADD FOREIGN KEY (answer_id) REFERENCES answers(id);


-- Load Data
COPY questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
from '/home/coty/Desktop/SDCData-copy/data/QuestionsAnswers/questions.csv' DELIMITER ',' CSV HEADER;

COPY answers(id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
from '/home/coty/Desktop/SDCData-copy/data/Reviews/answers.csv' DELIMITER ',' CSV HEADER;

COPY answers_photos(id, answer_id, url)
from '/home/coty/Desktop/SDCData-copy/data/QuestionsAnswers/answers_photos.csv' DELIMITER ',' CSV HEADER;

COPY products(id, name, slogan, description, category, default_price)
from '/home/coty/Desktop/SDCData-copy/data/Reviews/product.csv' DELIMITER ',' CSV HEADER;
