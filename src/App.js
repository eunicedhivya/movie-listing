import './App.css';
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
import { createContext, useState, useContext, useEffect } from 'react';
import Home from './pages/Home';
import Colorbox from './pages/Colorbox';
import Movie from './pages/Movie';
import MovieDetails from './pages/MovieDetails';
import AddMovies from "./pages/AddMovies";
import EditMovies from "./pages/EditMovies";
import Notfound from './pages/Notfound';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';

const context = createContext();

function App() {

  const [mode, setMode] = useState("light");

  // Call the API when the component is mounted
  
  return (
    <div className="App">
      <context.Provider value={{mode, setMode}}>
      <header className='siteheader'> <ul className='main-menu'>
        <li>
          <NavLink  to="/" exact activeClassName="active">Home</NavLink >
        </li>
        <li>
          <NavLink  to="/movies" exact activeClassName="active">Movies</NavLink >
        </li>
        {/* <li>
          <NavLink  to="/films" exact activeClassName="active">Films</NavLink >
        </li> */}
      </ul>
       <ul className='main-menu'>
        <li>
          <NavLink  className='addOp' to="/add" exact activeClassName="active"> Add Movies <AddCircleOutlineIcon /> </NavLink >
        </li>
      </ul></header>
      <hr />
       <Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/:id"> 
          <MovieDetails/>
        </Route>
        <Route path="/add"> 
          <AddMovies />
        </Route>
        <Route path="/edit/:id"> 
          <EditMovies />
        </Route>
        <Route path="/movies"> <Movie /> </Route>
        <Route path="/colorbox"> <Colorbox /> </Route>
        <Route exact path="/"> <Home /> </Route>
        <Route path="**"> <Notfound /> </Route>
      </Switch>
      </context.Provider>
    </div>
  );
}




export default App;
