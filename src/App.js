import React from 'react';
import './App.css';
//import SearchBar from "./SearchBar";
//import Details from "./Details";
import Search from "./Search";


function App() {
  return (
    <div className = "App"> 
      <header className = "App-header">
        <Search/>
      </header>
    </div>
  );
}
/*
function handleSearch(e) {
  const omdb = "http://www.omdbapi.com/?apikey="
  const apiKey = 'afdcb997';
  let searchWord = document.getElementById('movieSearch') 
  console.log(omdb + apiKey + searchWord);
  

  // fetch(http://www.omdbapi.com/?apikey=+ [apiKey]&s=batman)
  // .then((success) => { success.json() } )
  // .then((movies) => { console.log(movies) } )
  // .catch((error)=>{ console.log(error)});

  
  return("hello?")
}
*/
export default App;