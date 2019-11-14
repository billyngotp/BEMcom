import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 
function Details() {
        return (
            <div>
                <Router>
                    <nav>
                        <h2> BEM Movies </h2>

                        <ul>
                            <li> <Link to="/">Details</Link> </li>
                            <li> <Link to="/castandcrew">Cast and Crew</Link> </li>
                            <li> <Link to="/trailers">Trailer</Link> </li>
                            <li> <Link to="/store">Store</Link> </li>
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
                        <Info />
                    </Route>
                    </Switch>
                </Router>
            </div>
        );
    }   


function Info(props) {
    return (
      <div> 
        <h2> Populate information using the fetch API</h2> 
        <p> Function : displaySynopsis </p>
        <p> Function : displayReleaseDate </p>
        <p> Function : displayGenre </p>
        <p> Function : displayStores </p>
      </div>
    )
}

function Cast(props) {
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

function Trailers(props) {
    return (
      <div>
        <h2> This will call fetch function for trailers</h2>
        <p> Function : fetchMovies </p>
      </div>
    )
}

function Store(props) {
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

export default Details;