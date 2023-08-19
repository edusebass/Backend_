//EXERCISE
// 1. Use npm to install the morgan package
// 2. Run index2.js with nodemon.
// 3. Import the morgan module
// 4. MOunt the middlware using the Express .use method
// 5. Test the loging on localhost and with Postman

import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
