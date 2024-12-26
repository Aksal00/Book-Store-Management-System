const express = require('express');
const app = express();
const cors = require('cors')
const controller = require('./controller')

app.use(cors());

app.use(
    express.urlencoded(
        {
            extended: true,
        }
    )
)

app.use(express.json())

app.get('/books',(req,res)=>{
    controller.getBooks(req, res, next =>{
        res.send()
    })
})
app.post('/createbook',(req,res)=>{
    controller.addBook(req.body,(callback) =>{
        res.send()
    })
})
app.put('/updatebook',(req,res)=>{
    controller.updateBook(req.body,(callback) =>{
        res.send()
    })
})
app.post('/deletebook',(req,res)=>{
    controller.deleteBook(req.body,(callback) =>{
        res.send()
    })
})

module.exports = app;