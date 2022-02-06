import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Icon from '@mui/material/Icon';

function MovieDetails() {
    const history = useHistory()
    // console.log(history)
    
    const [moviedetails, setMovieDetails] = useState({
        "id": "",
        "title": "",
        "year": "",
        "rating": "",
        "plot": "",
        "poster": "",
        "trailer": "",
    });

    const {id} = useParams()
    // console.log(id);

    
    const url = "https://618fa735f6bf4500174849a5.mockapi.io/movies/"
    
    const loadMovie = () => {
        
        fetch(url+id, {method: "GET"})
        .then(data => data.json())
        .then((mvs) => setMovieDetails(mvs))
    }
    
    useEffect(loadMovie, [])

    console.log(moviedetails); 
    
   
    return (
        <div className='MovieDetails'>
            <div className='sidebar'>
                <img src={moviedetails.poster} />
            </div>
            <div className='maincontent'>
                <div className='movieheader'>
                    <h2>{moviedetails.title}</h2>
                <div>
                <Button variant="outlined" 
                startIcon={<ArrowBackIosIcon />}
                    onClick={()=>{
                        history.push("/movies/")
                    }}>
                Go Back
                </Button>
            </div>
        </div>
            <p>Rating: <Icon>star</Icon> {moviedetails.rating} | Year: {moviedetails.year}</p>
            <iframe width="100%" height="315" src={moviedetails.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <p>{moviedetails.plot}</p>
            
            
            </div>
        </div>
    )
}





export default MovieDetails;
