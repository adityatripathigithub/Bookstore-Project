const mongoose = require('mongoose');
const { type } = require('os');


const bookSchema = new mongoose.Schema({
    poster: {
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

    descripation: {
        type: String
    }

})

module.exports = mongoose.model('book', bookSchema)