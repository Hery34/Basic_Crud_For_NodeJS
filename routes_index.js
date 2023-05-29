// Import the Express module
const express = require('express');

// Create a new Express router
const router = express.Router();

// Import the Post model
const Post = require('../models/Post');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/crud-app', { useNewUrlParser: true });

// Get all posts
router.get('/', (req, res) => {
    // Find all posts
    Post.find({}, (err, posts) => {
        // If there is an error, send it to the client
        if (err) {
            res.send(err);
        } else {
            // Otherwise, send the posts to the client
            res.json(posts);
        }
    });
});

// Create a new post
router.post('/', (req, res) => {
    // Create a new Post object from the request body
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    // Save the post
    post.save((err, post) => {
        // If there is an error, send it to the client
        if (err) {
            res.send(err);
        } else {
            // Otherwise, send the post to the client
            res.json(post);
        }
    });
});

// Update a post
router.put('/:id', (req, res) => {
    // Find the post with the given ID
    const post = Post.findById(req.params.id);

    // If the post does not exist, send a 404 error
    if (!post) {
        res.sendStatus(404);
        return;
    }

    // Update the post with the data from the request body
    post.title = req.body.title;
    post.content = req.body.content;

    // Save the post
    post.save((err, post) => {
        // If there is an error, send it to the client
        if (err) {
            res.send(err);
        } else {
            // Otherwise, send the post to the client
            res.json(post);
        }
    });
});

// Delete a post
router.delete('/:id', (req, res) => {
    // Find the post with the given ID
    const post = Post.findById(req.params.id);

    // If the post does not exist, send a 404 error
    if (!post) {
        res.sendStatus(404);
        return;
    }

    // Delete the post
    post.remove((err, post) => {
        // If there is an error, send it to the client
        if (err) {
            res.send(err);
        } else {
            // Otherwise, send a 204 No Content response
            res.sendStatus(204);
        }
    });
});

// Export the router
module.exports = router;

