const express = require('express');
const morgan = require('morgan');

const app = express();
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/home.html');
});

app.get('/blog', (request, response) => {
    response.sendFile(__dirname + '/blog.html');
});
app.get('/api/projects', (request, response) => {
    response.json(projects);
});
app.get('/api/articles', (request, response) => {
    response.json(articles);
});

app.use((request, response, next) => {
    response.status(404).sendFile(__dirname + '/not-found.html');
});

app.listen(5005, () => console.log('Listening on server 5005!'));
