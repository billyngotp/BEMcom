import React from "react"

class Query extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            searchInput: "",
        }
        this.setSearch = this.setSearch.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput = text => {
        this.setState({text})
    }

    setSearch = () => {
        this.setState({searchInput: this.state.text})
    }

    render(){
        return(
            <div>
                <SearchField changed={this.handleInput}/>
                <ConfirmedSearch changed={this.setSearch}/>
                <label>{this.state.searchInput}</label>
            </div>
        )
    }
}

function SearchField(props){
    function change(e) {
        props.changed(e.target.value);
    }
    return(
        <input id = "input" onChange = {change}/>
    )
}

function ConfirmedSearch(props) {
    console.log(document.getElementById("input"))
    return <button onClick={props.changed}> Search </button>
}

export default Query;