const express = require('express');
const app = express();

const {quotes} = require('./data');
const {getRandomElement} = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res) => {
    res.json(
        {
            quote: {
                quote: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
                person: 'Ellen Ullman'
            }
        }
    )
})


app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}. . .`);
})

