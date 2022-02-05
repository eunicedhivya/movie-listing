import { useState, useEffect } from 'react';
import Card from '../components/Card';


function Movie() {

  
  const [movieList, setMovieList] = useState([]);
  const url = "https://618fa735f6bf4500174849a5.mockapi.io/movies/"

  const getMovies = () => {
    fetch(url, {method: "GET"})
    .then(data => data.json())
    .then((mvs) => setMovieList(mvs))
  }
  
  useEffect(getMovies, [])
  
  // const [movieTitle, setMovieTitle] = useState("");
  // const [movieRating, setMovieRating] = useState("");
  // const [movieYear, setMovieYear] = useState("");
  // const [moviePlot, setMoviePlot] = useState("");
  // const [movieimg, setMovieimg] = useState("");
  // const [movieList, setMovieList] = useState(movies);
 return (
    <div className="pages">
       <h1>Movies Listing</h1>
       
       <div className='cardlist'>
        {movieList.map(function (movie) {
          return (
            <Card
              key={movie.id}
              name={movie.title}
              rating={movie.rating}
              year={movie.year}
              plot={movie.plot}
              img={movie.poster}
              id={movie.id}
              movies = {movieList}
              setMovieList = {setMovieList}
              getMovies = {getMovies}
            />
          );
        })}

      </div>
    </div>
  );
}



export default Movie;