//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var userAuthorided = false;

//this function is for conection with localhost3000
app.use(bodyParser.urlencoded({extended: true}));


function obtainPassword(req, res, next) {
    const password = req.body["password"];
    if (password === "qwe") {
        userAuthorided = true;
    }
    next();
}

app.use(obtainPassword);

//CREATE and CALL THE MAIN SECRETS
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

// call the page main
app.post("/check", (req, res) => {
    if(userAuthorided) {
        res.sendFile(__dirname + "/public/secret.html");
        userAuthorided = false;
    } else {
        res.redirect("/");
    }
});

// call listen for to comprobe changes
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});