
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams, useHistory } from 'react-router-dom'

function EditMovies({movieList, setMovieList}){
    const {id} = useParams()
    const fdMovie = movieList.filter(function(obj){
      return obj.id === parseInt(id);
    })
    const history = useHistory()
    const [movieTitle, setMovieTitle] = useState(fdMovie[0]['title']);
    const [movieRating, setMovieRating] = useState(fdMovie[0]['rating']);
    const [movieYear, setMovieYear] = useState(fdMovie[0]['year']);
    const [moviePlot, setMoviePlot] = useState(fdMovie[0]['plot']);
    const [movieimg, setMovieimg] = useState(fdMovie[0]['posterUrl']);
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
          movieList.forEach(function(obj){
            if(obj.id === parseInt(id)){
              obj['title'] =  movieTitle;
              obj['year'] =  movieYear;
              obj['rating'] =  movieRating;
              obj['plot'] =  moviePlot;
              obj['posterUrl'] =  movieimg;
            }
          })
          setMovieList(movieList)
          history.push("/movies")

        }}>Add Movie</Button>
      </section>
    )
}

export default EditMovies;