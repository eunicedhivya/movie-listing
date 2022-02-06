
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams, useHistory } from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik'

  function EditMovies(){

    let history = useHistory();
    const { id } = useParams();
    const [movie, setMovie] = useState({
        "title": "",
        "year": "",
        "rating": "",
        "plot": "",
        "poster": "",
        "trailer": "",
    });

    const { title, year, rating, plot, poster, trailer } = movie;

    const onInputChange = e => {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const url = "https://618fa735f6bf4500174849a5.mockapi.io/movies/"
    
    const loadMovie = () => {
        fetch(url+id, {method: "GET"})
          .then(data => data.json())
          .then((mvs) => setMovie(mvs))
    }

    const onSubmit = (e) => {
      e.preventDefault()
      console.log(movie)
      fetch(url+id, {method: "PUT", headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            }, body: JSON.stringify(movie)})
        .then(data => data.json())
        .then(data => {
            console.log('Success:', data);
            history.push("/movies");
          })
      
    };

    useEffect(loadMovie, [])
    
    return (
        <section className='form-section'>
          <h1>Edit Movie</h1>
        <div className='forms'>
          <TextField label="Name" variant="outlined" type="text" placeholder='Name' onChange={e => onInputChange(e)} name="title" value={title}  />
          <TextField label="Rating" variant="outlined" type="text" placeholder='Rating' name="rating" value={rating} onChange={e => onInputChange(e)} />
          <TextField label="Year" variant="outlined" type="text" placeholder='Year' name="year" value={year} onChange={e => onInputChange(e)} />
        </div>
        <div className='forms'>
          <TextField label="Plot" variant="outlined" type="text" placeholder='Plot' name="plot" value={plot} onChange={e => onInputChange(e)} />
          <TextField label="Poster" variant="outlined" type="text" placeholder='Poster' name="poster" value={poster} onChange={e => onInputChange(e)} />
          <TextField label="Trailer" variant="outlined" type="text" placeholder='Trailer' name="trailer" value={trailer} onChange={e => onInputChange(e)} />
        </div>
        <br />
        <Button variant="contained" onClick={(e) => onSubmit(e)}>Update Movie</Button>
      </section>
    )
}

export default EditMovies;