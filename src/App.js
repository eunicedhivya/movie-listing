import './App.css';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import Colorbox from './pages/Colorbox';
import Movie from './pages/Movie';
import MovieDetails from './pages/MovieDetails';
import AddMovies from "./pages/AddMovies";
import EditMovies from "./pages/EditMovies";
import Notfound from './pages/Notfound';


function App() {

  let movies = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      year: "2001",
      rating: 5,
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
      plot:
        "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      posterUrl:
        "https://movieposters2.com/images/669657-b.jpg"
    },
    {
      id: 3,
      title: "The Shawshank Redemption",
      year: "1994",
      rating: 5,
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
      plot:
        "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
      posterUrl:
        "https://movieposters2.com/images/659675-b.jpg"
    }
  ];
 
  const [movieList, setMovieList] = useState(movies);

  return (
    <div className="App">
       <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
        <li>
          <Link to="/add">Add Movies</Link>
        </li>
      </ul>

      <hr />
       <Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/:id"> 
          <MovieDetails movies={movieList} />
        </Route>
        <Route path="/add"> 
          <AddMovies movieList={movies} setMovieList={setMovieList}/>
        </Route>
        <Route path="/edit/:id"> 
          <EditMovies movieList={movies} setMovieList={setMovieList}/>
        </Route>
        <Route path="/movies"> <Movie movies={movieList}  setMovieList={setMovieList} /> </Route>
        <Route path="/colorbox"> <Colorbox /> </Route>
        <Route exact path="/"> <Home /> </Route>
        <Route path="**"> <Notfound /> </Route>
      </Switch>

    </div>
  );
}




export default App;
