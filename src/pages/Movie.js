import Card from "../components/Card";
import { createContext, useState, useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";

function Movie() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const light = { color: "#0461bc" };
  const dark = { color: "#000000" };
  const [movieList, setMovieList] = useState([]);
  const url = "https://618fa735f6bf4500174849a5.mockapi.io/movies/";

  const getMovies = () => {
    fetch(url, { method: "GET" })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovies(), []);

  // const [movieTitle, setMovieTitle] = useState("");
  // const [movieRating, setMovieRating] = useState("");
  // const [movieYear, setMovieYear] = useState("");
  // const [moviePlot, setMoviePlot] = useState("");
  // const [movieimg, setMovieimg] = useState("");
  // const [movieList, setMovieList] = useState(movies);
  return (
    <div className="pages">
      <h1 style={theme === "light" ? light : dark}>Movies Listing</h1>

      <div className="cardlist">
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
              movies={movieList}
              setMovieList={setMovieList}
              getMovies={getMovies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movie;
