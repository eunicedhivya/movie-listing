// import { useState } from 'react';
import Card from '../components/Card';


function Movie({movies,  setMovieList}) {
  
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

        {movies.map(function (movie) {
          return (
            <Card
              key={movie.id}
              name={movie.title}
              rating={movie.rating}
              year={movie.year}
              plot={movie.plot}
              img={movie.posterUrl}
              id={movie.id}
              movies = {movies}
              setMovieList = {setMovieList}
            />
          );
        })}

      </div>
    </div>
  );
}



export default Movie;