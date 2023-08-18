//diferentes tipos de solicitudes (GET, POST, PUT, DELETE, etc.)
//request /

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>Hello</h1>`);
});

app.get('/contact', (req, res) => {
    res.send(`<h1>Contact me</h1>
    <p>Telefono: 0986572316</p>`);
});

app.get('/about', (req, res) => {
    res.send(`<h1>About me</h1>
    <p>I am Eduardo Almachi</p>`);
});

app.listen(port, () => {
    console.log(`Listen port ${port}`);
});