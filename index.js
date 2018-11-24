const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const data = 'Fiodar';

app.get('/', (req, res) => res.render('index', { data }));

app.listen(3000, () => {
    console.log('App si listen on port 3000');
});