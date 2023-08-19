/* GOAL
Where you input the string its should be in other page called /sumbit
*/

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { getRandomValues } from "crypto";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var bandName = "";

//this function for obtaining the html
app.use(bodyParser.urlencoded({ extended: true }));


//this function generate the bandname
function generatorBand(req, res, next) {
  bandName = req.body["street"] + " " + req.body["pet"];
  next();
}

//this app.use this function is that the app use the function generatorBand
app.use(generatorBand);

//obtanin de main html for localhost 3000
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

//This  post the function is for that obtanin the bandname
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1> <h3>${bandName}</h3>`);
  console.log(req.body);
});

// This is a simple log about the site is running
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
