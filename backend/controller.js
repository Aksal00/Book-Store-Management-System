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
const addBook = (req,res,next) => {
    const book = new Book({
        id: req.body.id,
        name: req.body.name,
        author: req.body.author,
    })
    book.save()
    .then(response => {
        res.json({response})
    })
    .catch(error=>{
        res.json({message: error})
    });
}
const updateBook = (req,res,next) => {
    
    const {id, name, author}= req.body;
    Book.updateOne({id:id},{$set:{name:name}},{$set:{author:author}})
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