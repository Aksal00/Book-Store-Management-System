import { useEffect, useState } from "react"
import BookForm from "./BookForm"
import BooksTable from "./BooksTable"
import { Box} from '@mui/material'
import Axios from "axios"


const Books = ()=>{
    const [books,setBooks] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedBook,setSelectedBook] = useState({});

    useEffect(()=>{
        getBooks(); 
        
    },[]);
    const getBooks = () =>{
        Axios.get('http://localhost:3001/api/books')
            .then(response =>{
                setBooks(response.data?.response||[]);
            })
            .catch(error =>{
                console.error("Axios Error: ",error)
            })
    }

    const addBook = (data) =>{
        setSubmitted(true);
        const payload ={
            id: data.id,
            name: data.name,
            author: data.author,
        }
        Axios.post('http://localhost:3001/api/addbook',payload)
            .then(()=>{
                getBooks();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error =>{
                console.error("Axios Error: ",error)
            })
    }
    const updateBook = (data) =>{
        setSubmitted(true);
        const payload ={
            id: data.id,
            name: data.name,
            author: data.author,
        }
        Axios.put('http://localhost:3001/api/updatebook',payload)
            .then(()=>{
                getBooks();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error =>{
                console.error("Axios Error: ",error)
            })
    
    }
    const deleteBook = (data) =>{
       
        Axios.post('http://localhost:3001/api/deletebook',data)
            .then(()=>{
                getBooks();
            })
            .catch(error =>{
                console.error("Axios Error: ",error)
            })
    
    }

    return(
        <Box 
            sx={{
                padding: '100px',
                margin: 'auto',
                marginTop: '100px'
            }}
        >
            <BookForm
                addBook={addBook}
                updateBook={updateBook}
                submitted={submitted}
                data ={selectedBook}
                isEdit={isEdit}
                
            />
            <BooksTable 
                rows={books}
                selectedBook={data =>{
                        setSelectedBook(data);
                        setIsEdit(true); 
                    }
                }
                deleteBook={data => window.confirm('Are you sure?')&& deleteBook(data)}
                
            />
        </Box>
        
    )
}
export default Books;