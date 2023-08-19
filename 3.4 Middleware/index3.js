/*
1. Run index3.js with nodemon
2. Create ypur own function called logger (req, res, next)
3. Inside your function console.log() the request method and the request URL
4. Rememeber to call next()
5. Mount  yout middleware function using the Express .use() method
6. Test logging on local host and with Postman
*/
import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
