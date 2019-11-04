import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <h2> BEM Movies </h2>
          <input type = "text" name = "search" placeholder = "Search by movie name"/>
          <button type = "button" target = "_self"> Search </button>
          <ul>
            <li>
              <Link to="/">Details</Link>
            </li>
            <li>
              <Link to="/castandcrew">Cast and Crew</Link>
            </li>
            <li>
              <Link to="/trailers">Trailer</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/castandcrew">
            <Cast/>
          </Route>
          <Route path="/trailers">
            <Trailers />
          </Route>
          <Route path ="/store">
            <Store />
          </Route>
          <Route path="/">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Details() {
  return (
  <div> 
  <h2> Populate information using the fetch API</h2> 
    <p>
      Function : displaySynopsis
    </p>
    <p>
      Function : displayReleaseDate
    </p>
    <p>
      Function : displayGenre
    </p>
    <p>
      Function : displayStores
    </p>
  </div>
  
  )
}

function Cast() {
  return (
    <div>
      <h2>This is the Cast and Crew</h2>
      <p> Function : searchMovieDetails </p>
      <p> Function : displayMovieCast</p>
      <p> Function : displayCastName</p>
      <p> Function : displayCastPictures</p>
    </div>
    

  )
}

function Trailers() {
  return (
    <div>
      <h2> This will call fetch function for trailers</h2>
      <p> Function : fetchMovies </p>
    </div>
  )
}

function Store() {
  return(
    <div>
      <h2> This is where I go to buy movies</h2>
      {/* insert call function PopulateBuyLinks */}
      <p> Function : populateBuyLinks </p>
      {/* insert URL for Movies */}
      <a href = "url.com" > Function : linkofMovies </a>
    </div>
  ) 
}