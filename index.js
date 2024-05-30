const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const Blog = require('./model')

app.use(bodyParser.json());

let blogs = [];
let currentId = 1;

app.get('/Hello', (req, res) => {
    res.send("Working");
});

// to get all the blogs
app.get('/blogs', (req, res) => {
    res.json(blogs);
});

// to get blog by Id
app.get('/blogs/:id', (req, res) => {
    const blog = blogs.find(b => b.id == req.params.id);
    if (blog) {
        res.json(blog);
    } else {
        res.status(404).send('Blog not found');
    }
});

// to post blog
app.post('/blogs', (req, res) => {
    const { title, description, category } = req.body;
    if (title && description && category && typeof category === 'string') {
        const myBlog = new Blog(currentId++, title, description, category);
        blogs.push(myBlog);
        res.status(201).json(myBlog);
    } else {
        res.status(400).send('Missing required fields or category is not a single string');
    }
});

// to update blog
app.put('/blogs/:id', (req, res) => {
    const { title, description, category } = req.body;
    const blogIndex = blogs.findIndex(b => b.id == req.params.id);
    if (blogIndex !== -1) {
        if (title && description && category && typeof category === 'string') {
            blogs[blogIndex] = new Blog(parseInt(req.params.id), title, description, category);
            res.json(blogs[blogIndex]);
        } else {
            res.status(400).send('Missing required fields or category is not a single string');
        }
    } else {
        res.status(404).send('Blog not found');
    }
});

app.listen(port, () => {
    console.log("App running");
});
