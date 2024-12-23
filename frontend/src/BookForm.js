import React, { useState } from 'react'
import { Button, Grid2, Typography} from "@mui/material"

const BookForm = () => {

    const [id,setID] = useState(0)
    const [name,setName] = useState("")
    const [author,setAuthor] = useState("")

    return (
        <Grid2
            container
            spacing={2}
            sx={{
                backgroundColor: '#d2f6de',
                marginBottom: '30px',
                display: 'block',
            }}
            

        >
            <Grid2 item xs={12}>
                <Typography component={'h1'} sx={{ fontSize: '20px',fontWeight: 'bold',marginBottom: '10px',color: '#000000'}}>Book Form</Typography>
            </Grid2>
            <Grid2 sx={{marginX: '20px'}} >
                <Grid2 item xs={12} sm={6} sx={{display: 'flex',}}>
                    <Typography 
                        component={'label'} 
                        htmlFor="id"
                        sx={{
                            color: '#000000',
                            marginRight: '20px',
                            fontSize: '16px',
                            width: '100px',
                            display: 'block'
                        }}
                    >
                        Book ID
                    </Typography>
                    <input
                        type = "number"
                        id = 'id'
                        name = 'id'
                        sx={{ width: '400px'}}
                        value={id}
                        onChange= {e =>setID(e.target.value)}
                    />
                </Grid2>
                <Grid2 item xs={12} sm={6} sx={{display: 'flex'}}>
                    <Typography 
                        component={'label'} 
                        htmlFor="id"
                        sx={{
                            color: '#000000',
                            marginRight: '20px',
                            fontSize: '16px',
                            width: '100px',
                            display: 'block'
                        }}
                    >
                        Book Name
                    </Typography>
                    <input
                        type = "text"
                        id = 'name'
                        name = 'name'
                        sx={{ width: '400px'}}
                        value={name}
                        onChange= {e =>setName(e.target.value)}
                    />
                </Grid2>
                <Grid2 item xs={12} sm={6} sx={{display: 'flex'}}>
                    <Typography 
                        component={'label'} 
                        htmlFor="id"
                        sx={{
                            color: '#000000',
                            marginRight: '20px',
                            fontSize: '16px',
                            width: '100px',
                            display: 'block'
                        }}
                    >
                        Author
                    </Typography>
                    <input
                        type = "text"
                        id = 'author'
                        name = 'author'
                        sx={{ width: '400px'}}
                        value={author}
                        onChange= {e =>setAuthor(e.target.value)}
                    />
                </Grid2>
                <Button
                    sx={{
                        margin: 'auto',
                        marginBottom: '20px',
                        backgroundColor: '#0c543e',
                        color: '#ffffff',
                        marginLeft: '15px',
                        marginTop: '20px',
                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#00c6e6'
                        }
                    }}
                
                >
                    Add book
                </Button> 
            </Grid2>      
        </Grid2>
  )
}

export default BookForm