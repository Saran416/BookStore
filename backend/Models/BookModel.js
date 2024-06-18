import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: {type: String, required: true},
    publishYear: {type: Number, required: true},

})

const bookModel = mongoose.model('books',bookSchema)

export default bookModel