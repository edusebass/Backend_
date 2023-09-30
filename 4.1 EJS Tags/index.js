import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {

    const data = {
        title: "EJS TAGS",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlcontent: "<strong>This is a some strong text</strong>"

    }

    res.render('index.ejs', data);

    
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});