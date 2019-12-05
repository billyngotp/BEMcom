import React from 'react';
//import Details from './Details';
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

    handleDesiredSearch(id) {
        console.log(id)
        this.setState({desiredSearch:id})
        const component = this
        const apiKey = '749d54f1'
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + apiKey + '&i=' + this.state.desiredSearch
        fetch(url)
        .then(response => response.json())
        .then(response => component.setState ({uniqueSearch:response.Search}))
        .catch (err => console.log(err))

        console.log(this.state.uniqueSearch)
    }

    handleQueryInput(event) {
        this.setState({searchInput: event.target.value})
    }

    handleSearch() {
        const component = this
        const apiKey = '749d54f1'
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + apiKey + '&s=' + this.state.searchInput
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
            </div>
        )
    }
}

export default Search;
