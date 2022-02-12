import './App.css';
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
import { createContext, useState, useContext, useEffect } from 'react';
import Home from './pages/Home';
import Colorbox from './pages/Colorbox';
import Movie from './pages/Movie';
import MovieDetails from './pages/MovieDetails';
import AddMovies from "./pages/AddMovies";
import EditMovies from "./pages/EditMovies";
import ReducerTask from "./pages/ReducerTask";
import Notfound from './pages/Notfound';
import BasicForm from './components/BasicForm';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

// const context = createContext();

function App() {
  const history = useHistory();
  const [mode, setMode] = useState("light");
  
  return (
    <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Box>
              <Button color="inherit" onClick={()=>history.push('/')}>Home</Button>
              <Button color="inherit" onClick={()=>history.push('/movies')}>Movies</Button>
              <Button color="inherit" onClick={()=>history.push('/basic-form')}>Basic Form</Button>
            </Box>
            <Button color="inherit" onClick={()=>history.push('/add')}>Add Movies <AddCircleOutlineIcon /></Button> 
          </Toolbar>
        </AppBar>
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
        <Route path="/basic-form"> <BasicForm /> </Route>
        <Route path="/colorbox"> <Colorbox /> </Route>
        <Route path="/reducertask"> <ReducerTask /> </Route>
        <Route exact path="/"> <Home /> </Route>
        <Route path="**"> <Notfound /> </Route>
      </Switch>
    </div>
  );
}




export default App;
