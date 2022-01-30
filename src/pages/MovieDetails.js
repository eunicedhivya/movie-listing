import { useParams, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function MovieDetails({movies}) {
    console.log(movies);
    const {id} = useParams()
    console.log(id);
    let fdMovie  =  movies.filter(function(movie){
        return movie.id === parseInt(id)
    })

    // const name = "Movie Name"
    // const summary = "Plot"
    // const poster = "URL"
    const name = fdMovie[0]['title']
    const rating = fdMovie[0]['rating']
    const year = fdMovie[0]['year']
    const summary = fdMovie[0]['plot']
    const poster = fdMovie[0]['posterUrl']
    
    const history = useHistory()
    console.log(history)
   
    return (
        <div className='MovieDetails'>
            <h1>{name}</h1>
            <p>{rating}</p>
            <p>{year}</p>
            <p>{summary}</p>
            <img src={poster} />
            <Button variant="outlined" 
                startIcon={<ArrowBackIosIcon />}
                    onClick={()=>{
                        history.push("/movies/")
                    }}>
                Go Back
            </Button>
        </div>
    )
}





export default MovieDetails;
