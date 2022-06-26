import "./App.css";
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Colorbox from "./pages/Colorbox";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import AddMovies from "./pages/AddMovies";
import EditMovies from "./pages/EditMovies";
import ReducerTask from "./pages/ReducerTask";
import Notfound from "./pages/Notfound";
import BasicForm from "./components/BasicForm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import NavBar from "./components/NavBar";
import { createContext, useState, useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const history = useHistory();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const light = { backgroundColor: "#ffffff" };
  const dark = { backgroundColor: "#cccccc" };

  return (
    <div className="App" style={theme === "light" ? light : dark}>
      <div
        className="bgFullScreen"
        style={theme === "light" ? light : dark}
      ></div>
      <NavBar />
      <Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route path="/" exact>
          <Redirect to="/movies" />
        </Route>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route path="/add">
          <AddMovies />
        </Route>
        <Route path="/edit/:id">
          <EditMovies />
        </Route>
        <Route path="/movies">
          <Movie />
        </Route>
        <Route path="/basic-form">
          <BasicForm />
        </Route>
        <Route path="/colorbox">
          <Colorbox />
        </Route>
        <Route path="/reducertask">
          <ReducerTask />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="**">
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
