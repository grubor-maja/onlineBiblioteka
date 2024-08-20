const {Book, validateBook} = require('../models/bookModel');

exports.createBook = async(req,res) => {
    const {error} = validateBook(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const book = new Book(req.body);
    await book.save();
    res.send(book);
};
exports.getBooks = async(req,res) => {
    const books = await Book.find();
    res.send(books);
}
exports.getBook = async(req,res) => {
    const book = await Book.findById(req.params.id);
    if(!book) return res.status(400).send('Knjiga nije pronadjena.');

    res.send(book);
}
