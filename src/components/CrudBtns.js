import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function CrudBtns({id, movies, setMovieList}) {
    const history = useHistory()
    
    return (
        <div>


            <IconButton color="primary" onClick={()=>{
                history.push("/edit/"+id)}} aria-label="expand" >
                <EditIcon />
            </IconButton>
            <IconButton color="primary" onClick={()=>{
                console.log("CRUDOPS", id);
                console.log("CRUDOPS", movies);
                let updatedList = movies.filter(function(obj){
                    return obj.id !== id
                })
                console.log(updatedList);
                setMovieList(updatedList)
                history.push("/movies")
                // alert("Delete")
            }} aria-label="expand" >
                <DeleteIcon />
            </IconButton>
        </div>
    )
}


export default CrudBtns;
