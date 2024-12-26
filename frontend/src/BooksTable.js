import { Typography,Paper,Table,TableBody,TableCell,TableRow,TableContainer,Button } from '@mui/material'
import React from 'react'

const BooksTable = ({rows, selectedBook, deleteBook}) => {

    // Sort the rows by 'id' in ascending order
    const sortedRows = [...rows].sort((a, b) => a.id - b.id);


    return(
    <TableContainer component={Paper}>
        <Typography component={'h1'} sx={{ fontSize: '20px',fontWeight: 'bold',marginBottom: '10px',color: '#000000'}}>Book Table</Typography>
        <Table>
            <TableRow>
                <TableCell>Book ID</TableCell>
                <TableCell>Book Name</TableCell>
                <TableCell>Author</TableCell>
            </TableRow>
            <TableBody>
                {
                    sortedRows.length>0? sortedRows.map(row=>(
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': {border:0}}}>
                            <TableCell component='th' scope='row'>{row.id}</TableCell>
                            <TableCell component='th' scope='row'>{row.name}</TableCell>
                            <TableCell component='th' scope='row'>{row.author}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{margin: '0px 10px'}}
                                    onClick={()=>selectedBook({ id: row.id, name: row.name, author: row.author })}
                                >
                                    Update
                                </Button>
                                <Button
                                    sx={{margin: '0px 10px'}}
                                    onClick={()=>deleteBook({ id: row.id})}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>     
                    )):(
                        <TableRow sx={{ '&:last-child td, &:last-child th': {border:0}}}>
                            <TableCell component='th' scope='row'>No Data</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default BooksTable