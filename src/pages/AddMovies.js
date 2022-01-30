
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom'

function AddMovies({movieList, setMovieList}){
    const history = useHistory()
    const [movieTitle, setMovieTitle] = useState("");
    const [movieRating, setMovieRating] = useState("");
    const [movieYear, setMovieYear] = useState("");
    const [moviePlot, setMoviePlot] = useState("");
    const [movieimg, setMovieimg] = useState("");
    return (
        <section className='form-section'>
        <div className='forms'>
          <TextField label="Name" variant="outlined" type="text" placeholder='Name' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
          <TextField label="Rating" variant="outlined" type="text" placeholder='Rating' value={movieRating} onChange={(e) => setMovieRating(e.target.value)} />
          <TextField label="Year" variant="outlined" type="text" placeholder='Year' value={movieYear} onChange={(e) => setMovieYear(e.target.value)} />
        </div>
        <div className='forms'>
          <TextField label="Plot" variant="outlined" type="text" placeholder='Plot' value={moviePlot} onChange={(e) => setMoviePlot(e.target.value)} />
          <TextField label="Poster" variant="outlined" type="text" placeholder='Poster' value={movieimg} onChange={(e) => setMovieimg(e.target.value)} />
        </div>
        <br />
        <Button variant="contained" onClick={(e) => {
          let newMovie = {
            id: movieList.length + 1,
            title: movieTitle,
            year: movieYear,
            rating: movieRating,
            plot: moviePlot,
            posterUrl: movieimg
          }
          setMovieList([...movieList, newMovie])
          console.log(newMovie);
          console.log(movieList);
          history.push("/movies")

        }}>Add Movie</Button>
      </section>
    )
}

export default AddMovies;