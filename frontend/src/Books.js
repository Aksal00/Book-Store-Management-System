import { useEffect, useState } from "react"
import BookForm from "./BookForm"
import BooksTable from "./BooksTable"
import { Box} from '@mui/material'
import Axios from "axios"


const Books = ()=>{
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        getBooks(); 
    },[]);
    const getBooks = () =>{
        Axios.get('http://localhost:3001/api/Books')
            .then(response =>{
                setBooks(response.data?.response||[]);
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
            <BookForm/>
            <BooksTable rows={books}/>
        </Box>
        
    )
}
export default Books;