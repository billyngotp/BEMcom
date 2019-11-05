let list = document.querySelector('.list')
let detail = document.querySelector('.detail')


fetch('http://www.omdbapi.com/?s=salt&apikey='+'afdcb997')
.then(function(response){
  return response.json()
}).then(function(movies){
    movies.Search.forEach(function(movie) {
      let MovieData = `<div class="movie">
                        <img class="poster" src="${movie.Poster}">
                        <a href="#" onclick="getDetails('${movie.imdbID}')">${movie.Title}</a>
                      </div>`

      list.innerHTML += MovieData
})
  })

function getDetails(imdbID) {
  fetch('http://www.omdbapi.com/?i='+imdbID+'&apikey='+'afdcb997')
  .then(function(response){
    return response.json()
  }).then(function(movie){
      let allDetail = `<div class='title'>
                        <h2>${movie.Title}</h2>
                        <img id="titlePoster" src="${movie.Poster}">
                      </div>
                      <div class="detail">
                        <h3>Year: ${movie.Year}</h3>
                        <h3>Rated: ${movie.Rated}</h3>
                        <h3>Released: ${movie.Released}</h3>
                        <h3>Director: ${movie.Director}</h3>
                      </div>`

    detail.innerHTML = allDetail
  })

}
