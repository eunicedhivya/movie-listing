
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom'

function AddMovies({movieList, setMovieList}){
    const history = useHistory()

    const [newMovie, setNewMovie] = useState({
        "title": "",
        "year": "",
        "rating": "",
        "plot": "",
        "poster": "",
        "trailer": "",
    });

    const { title, year, rating, plot, poster, trailer } = newMovie;

    const onInputChange = (e) => {
      setNewMovie({...newMovie, [e.target.name]: e.target.value})
    }

    const url = "https://618fa735f6bf4500174849a5.mockapi.io/movies/"
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(newMovie);
      fetch(url, {method: "POST", headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            }, body: JSON.stringify(newMovie)})
        .then(data => data.json())
        .then(data => {
            console.log('Success:', data);
            history.push("/movies");
        })
      
    };
    return (
        <section className='form-section'>
          <h1>Add Movie</h1>
        <div className='forms'>
              <TextField label="Name" variant="outlined" type="text" placeholder='Name' name="title" onChange={e => onInputChange(e)} value={title} /> 
              <TextField label="Rating" variant="outlined" type="text" placeholder='Rating' name="rating" onChange={e => onInputChange(e)} value={rating} />
              <TextField label="Year" variant="outlined" type="text" placeholder='Year' name="year" onChange={e => onInputChange(e)} value={year} />
              <TextField label="Plot" variant="outlined" type="text" placeholder='Plot' name="plot" onChange={e => onInputChange(e)} value={plot}/>
              <TextField label="Poster" variant="outlined" type="text" placeholder='Poster' name="poster" onChange={e => onInputChange(e)} value={poster} />
              <TextField label="Trailer" variant="outlined" type="text" placeholder='Trailer' name="trailer" onChange={e => onInputChange(e)} value={trailer}  /> 
        </div>
        
        <Button variant="contained" onClick={(e) => onSubmit(e)}>Add Movie</Button>
      </section>
    )
}

export default AddMovies;