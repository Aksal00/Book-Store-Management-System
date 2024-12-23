import { Typography,Paper,Table,TableBody,TableCell,TableRow,TableContainer,Button } from '@mui/material'
import React from 'react'

const BooksTable = ({rows}) => {
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
                    rows.length>0? rows.map(row=>(
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': {border:0}}}>
                            <TableCell component='th' scope='row'>{row.id}</TableCell>
                            <TableCell component='th' scope='row'>{row.name}</TableCell>
                            <TableCell component='th' scope='row'>{row.author}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{margin: '0px 10px'}}
                                    onClick={()=>{}}
                                >
                                    Update
                                </Button>
                                <Button
                                    sx={{margin: '0px 10px'}}
                                    onClick={()=>{}}
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