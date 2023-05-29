// Import the Mongoose module
const mongoose = require('mongoose');

// Create a new schema for a Post model
const PostSchema = new mongoose.Schema({
    // The title of the post
    title: {
        // The type of the title is String
        type: String,
        // The title is required
        required: true
    },
    // The content of the post
    content: {
        // The type of the content is String
        type: String,
        // The content is required
        required: true
    }
});

// Create a new Mongoose model for the Post schema
const Post = mongoose.model('Post', PostSchema);

