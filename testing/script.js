import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {

  stages: [
    { duration: '5s', target: 5 },
    { duration: '5s', target: 50 },
    { duration: '5s', target: 500 },
    { duration: '5s', target: 5000 },
  ],

};

// const testID = Math.floor(Math.random() * 100000);
// console.log(testID);


// If you set the product ID to be a random number, then if you use a test to check for that productID
// it will also change every time, and thus fail.

export default function () {
  // const testID = 40490;
  const testID = Math.floor(Math.random() * 100000);
  const url = `http://localhost:1128/qa/questions?product_id=${testID}`;
  const res = http.get(url);
  // const testID2 = testID;
  console.log("Testing on product ID: ", testID);
  check(res, {
    'Status was 200': (r) => r.status == 200,
    // 'Includes correct product id': (r) => r.body.includes(testID2),
  });
  sleep(1);
}

