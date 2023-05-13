const express = require('express');
const app = express();

const {quotes} = require('./data');
const {getRandomElement} = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res) => {
    res.json({quote: getRandomElement(quotes)})
})

app.get('/api/quotes/', (req, res) => {
    const { person } = req.query
    let quotesArr = quotes

    if(person) {
        quotesArr = quotes.filter(quote => quote.person === person)
    }

    res.json({quotes: quotesArr})
})

app.post('/api/quotes/', (req, res) => {
    res.json({quote: quotes[0]})
})

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}. . .`);
})

