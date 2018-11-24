const bodyParser = require('body-parser');
const express = require('express');

const Post = require('./models/post');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    Post.find({}).then(posts => {
        res.render('index', { posts });
    })
});

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
    const { title, content } = req.body;
    
    Post.create({
        title,
        content
    }).then(post => {
        console.log(post.id);
    });

    res.redirect('/');
});

module.exports = app;