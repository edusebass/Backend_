import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>");
});

app.post('/register', (req, res) => {
    //Do something with the data
    res.sendStatus(201);
});

app.put('/user/angel', (req, res) => {
    //success status response code indicates that the request has succeeded.
    res.sendStatus(200);
});

app.put('/user/angel', (req, res) => {
    res.sendStatus(200);
});

app.patch('/user/angel', (req, res) => { 
    res.sendStatus(200);
});