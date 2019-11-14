import React from 'react';
import Details from './Details';
//import Query from './Query';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            searchInput: "",
            data: ""
        }
    }

    // componentDidMount() {
    //     const apiKey = '749d54f1'
    //     fetch('http://www.omdbapi.com/?i=tt3896198&apikey=' + apiKey + '&s=' + this.state.searchInput)
    //     .then(response => response.json())
    //     .then(data => this.setState ({data})); 
    // }
    handleSearch() {
        this.setState({searchInput: document.getElementById("search").value})
    }
    

    render() {
        return(
            <div>
                <Query change = {this.handleSearch}/>
                <Details/>
            </div>
        );
    }
}

function Query(props) {
    return(
        <div>
            <input id = "search" />
            <button onClick = {props.change}> Submit </button>
        </div>
    )
}

export default Search;
