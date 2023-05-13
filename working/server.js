const express = require('express');
const app = express();

const {quotes} = require('./data');
const {getRandomElement} = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res) => {
    res.json({quote: getRandomElement(quotes)})
})


app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}. . .`);
})

