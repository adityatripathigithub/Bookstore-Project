const mongoose = require("mongoose")

mongoose

    .connect("mongodb://127.0.0.1:27017/bookstore")

    .then(() => {
        console.log("Database Connect");
    })

    .catch((err) => {
        console.log(err.message);
    }) 