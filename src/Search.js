import React from 'react';
import Details from './Details';
import Query from './Query';
import MoviePics from './MoviePics';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchInput: "",
            desiredSearch: "" ,
            results: [],
            uniqueSearch: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleQueryInput = this.handleQueryInput.bind(this);
        this.handleDesiredSearch = this.handleDesiredSearch.bind(this);
    }

    //Handle the on click when user selects a movie, fetch the single movie details
    handleDesiredSearch(id) {
        this.setState({desiredSearch:id})
        const component = this
        const apiKey = '749d54f1'
        const url = 'https://www.omdbapi.com/?i=' + id + '&apikey=' + apiKey
        fetch(url)
        .then(response => response.json())
        .then(response => { component.setState ({uniqueSearch:response}); console.log(response);})
        .catch (err => console.log(err))
    }

    //Handle the movie user wants
    handleQueryInput(event) {
        this.setState({searchInput: event.target.value})
    }

    //Fetch call for the movie title
    handleSearch() {
        const component = this
        const apiKey = '749d54f1'
        const url = 'https://www.omdbapi.com/?s=' + this.state.searchInput + '&apikey=' + apiKey
        fetch(url)
        .then(response => response.json())
        .then(response => component.setState ({results:response.Search}))
        .catch (err => console.log(err))

    } 

    render() {       
        return (
            <div>
                <h2> Welcome to BEMcom</h2>
                <h3> Be Everything Movie community</h3>
                <h5> Movie Database for all your movies</h5>
                <Query handleInput = {this.handleQueryInput} handleSearch = {this.handleSearch}/> 
                {this.state.results.map( (search, index) =>
                <MoviePics search = {search} key = {index} selected = {this.handleDesiredSearch}/>,
                )}
                <Details search = {this.state.uniqueSearch} />
            </div>
        )
    }
}

export default Search;
