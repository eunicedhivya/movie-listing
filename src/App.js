import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let movies = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      year: "2001",
      rating: 5,
      genres: ["Comedy", "Fantasy"],
      director: "Tim Burton",
      plot:
        'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
      posterUrl:
        "https://assets-prd.ignimgs.com/2021/12/15/harry-potter-20th-anniversary-return-to-hogwarts-1639611054318.jpg"
    },
    {
      id: 2,
      title: "The Cotton Club",
      year: "1984",
      rating: 3,
      genres: ["Crime", "Drama", "Music"],
      director: "Francis Ford Coppola",
      plot:
        "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
    },
    {
      id: 3,
      title: "The Shawshank Redemption",
      year: "1994",
      rating: 5,
      genres: ["Crime", "Drama"],
      director: "Frank Darabont",
      plot:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://www.themoviedb.org/t/p/original/hBcY0fE9pfXzvVaY4GKarweriG2.jpg"
    },
    {
      id: 4,
      title: "Crocodile Dundee",
      year: "1986",
      rating: 3,
      genres: ["Adventure", "Comedy"],
      director: "Peter Faiman",
      plot:
        "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
    },
    {
      id: 5,
      title: "Valkyrie",
      year: "2008",
      rating: 4,
      genres: ["Drama", "History", "Thriller"],
      director: "Bryan Singer",
      plot:
        "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
      posterUrl:
        "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg"
    }
  ];
  const [movieList, setMovieList] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [moviePlot, setMoviePlot] = useState("");
  const [movieimg, setMovieimg] = useState("");

  // function addMovieToList() {
  //   let movieItem = {
  //     movieName
  //   }
  // }
  return (
    <div className="App">
      <h1>Movie Listing</h1>
      <div className='form'>
        <input type="text" id="moviename" onChange={(e) => setMovieTitle(e.target.value)} /> <br />
        <input type="text" id="movierating" onChange={(e) => setMovieRating(e.target.value)} /> <br />
        <input type="text" id="movieyear" onChange={(e) => setMovieYear(e.target.value)} /> <br />
        <input type="text" id="movieplot" onChange={(e) => setMoviePlot(e.target.value)} /> <br />
        <input type="text" id="movieimg" onChange={(e) => setMovieimg(e.target.value)} /> <br />
        <button onClick={(e) => {
          // addMovieToList()
        }}>add Book</button>
      </div>
      <div className="movie-list">
        {movies.map(function (movie, id) {
          return (
            <MovieItem
              key={id}
              name={movie.title}
              rating={movie.rating}
              year={movie.year}
              plot={movie.plot}
              img={movie.posterUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

function MovieItem({ name, rating, year, plot, img }) {
  return (
    <div className="movie-list-item">
      <img src={img} alt={name} />
      <div className="movie-details">
        <h2>{name}</h2>
        <div className="metadata">
          <ul>
            <li className="rating">Rating: ⭐ {rating}</li>
            <li className="year">Year: {year}</li>
          </ul>
        </div>
        <p>{plot}</p>
      </div>
    </div>
  );
}


export default App;
