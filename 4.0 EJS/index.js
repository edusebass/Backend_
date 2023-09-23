//Create an Express Server
/*
1. Create a directory
2. Create index.js
3. Initialise npm (//Step for create express 
                    npm init -y
4. Install the Express package
(npm i express)
5. Write Ser application in index.js (code this down) 
6. Start server //node index.js
*/

import express from "express";

//This is a app that obligatory
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.render('index.ejs', {
        dayType: 'day',
        advice: 'advice'
    });
});

//3000 is the port of the server
app.listen(port, () =>{
    console.log(`Server running on port 3000 ${port}.`); //this is callback function
});