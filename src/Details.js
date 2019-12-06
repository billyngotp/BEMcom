import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 
class Details extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        const {Title:title, Actors:actors, Director:director, Language: lang, Genre:genre, Rated: rating, 
              Runtime:duration, Writer:writer, Released: rd, Plot:plot, Metascore: score, imdbRating:imdbrate, 
              } = this.props.search;
        const info = [title, lang, genre, rating, rd, plot, score ,imdbrate, writer]
        console.log(info)

        return (
            <div>
                
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
                        <Info desc = {info}/>
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

// function Store(props) {
//     return(
//       <div>
//         <h2> Store </h2>
//         <p> {props.title} </p>
//       </div>
//     ) 
// }

export default Details;