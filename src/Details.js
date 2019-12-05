import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 
const Details = (props) => {
    const {Title:title, Type:type, Year:year, imdbID:id, Poster:pic} = props.search
    console.log(props, type , year, id)
    return (
        <div>
            <h2> BEM Movies </h2>
            
            <Router>
                <Switch>
                <Route path="/castandcrew">
                    <Cast />
                </Route>
                <Route path="/trailers">
                    <Trailers />
                </Route>
                {/* <Route path ="/store">
                    <Store />
                </Route> */}
                <Route path="/">
                    <Info />
                </Route>
                </Switch>

                <nav>
                    <ul>
                        <p> <Link to="/">Details</Link> </p>
                        <p> <Link to="/castandcrew">Cast and Crew</Link> </p>
                        <p> <Link to="/trailers">Trailer</Link> </p>
                        {/* <p> <Link to="/store">Store</Link> </p> */}
                    </ul>
                </nav>

            </Router>
        </div>
    );

}
 

function Info(props) {
    //console.log("This is in the info" + props[0])
    return (
      <div>  
        <h2> Information </h2>
        <p> {props.title} </p>
      </div>
    )
}

function Cast(props) {
    return (
        <div>
            <h2>This is the Cast and Crew</h2>
            <p> {props.title} </p>
        </div>
    )
}

function Trailers(props) {
    return (
      <div>
        <h2> This will call fetch function for trailers</h2>
        <p> {props.title} </p>
      </div>
    )
}

function Store(props) {
    return(
      <div>
        <h2> Store </h2>
        <p> {props.title} </p>
      </div>
    ) 
}

export default Details;