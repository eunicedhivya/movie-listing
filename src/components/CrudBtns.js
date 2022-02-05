import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function CrudBtns({id, movies, setMovieList, getMovies}) {
    const history = useHistory()
    
    return (
        <div>
            <IconButton color="primary" onClick={()=>{
                history.push("/edit/"+id)}} aria-label="expand" >
                <EditIcon />
            </IconButton>
            <IconButton color="primary" onClick={()=>{
                const url = "https://618fa735f6bf4500174849a5.mockapi.io/movies/"
                fetch(url+id, {method: "DELETE"})
                .then(data => data.json())
                .then(() => getMovies())
                history.push("/movies")
            }} aria-label="expand" >
                <DeleteIcon />
            </IconButton>
        </div>
    )
}


export default CrudBtns;
