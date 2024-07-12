const mongoose = require('mongoose');
const { type } = require('os');


const bookSchema = new mongoose.Schema({
    Poster: {
        type: String
    },

    isbn: {
        type: String
    },
    author: {
        type: String
    },

    Price: {
        type:Number
    },

    Name: {
        type: String
    },

    description: {
        type: String
    },

})

module.exports = mongoose.model('book', bookSchema)