const { response } = require('./app');
const Book = require('./model');

const getBooks = (req,res,next) => {
    Book.find()
        .then(response => {
            res.json({response})
        })
        .catch(error=>{
            res.json({message: error})
        });
}
const addBook = (req, res, next) => {
    const { id, name, author } = req.body;

    // Check if a book with the same ID already exists
    Book.findOne({ id: id })
        .then(existingBook => {
            if (existingBook) {
                // If a book with the same ID exists, send a message
                return res.status(400).json({ message: "A book with this ID already exists." });
            }

            // If no book with this ID exists, create and save the new book
            const book = new Book({
                id: id,
                name: name,
                author: author,
            });

            book.save()
                .then(response => {
                    res.json({ response });
                })
                .catch(error => {
                    res.json({ message: error });
                });
        })
        .catch(error => {
            res.json({ message: error });
        });
};
const updateBook = (req,res,next) => {
    
    const {id, name, author}= req.body;
    Book.updateOne({id:id},{$set:{name:name,author:author}})
        .then(response => {
            res.json({response})
        })
        .catch(error=>{
            res.json({message: error})
        });
}

const deleteBook = (req,res,next) => {
    
    const {id}= req.body;
    Book.deleteOne({id:id})
        .then(response => {
            res.json({response})
        })
        .catch(error=>{
            res.json({message: error})
        });
}

exports.getBooks = getBooks;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;