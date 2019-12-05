import React from 'react'

class Query extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleQueryInput = this.handleQueryInput.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSearch()
    }

    handleQueryInput(event) {
        this.props.handleInput(event)
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        <input type = "text" placeholder = "Search" onChange = {this.handleQueryInput}/> 
                    </label>
                        <input type = "submit" /> 
                </form>
            </div>
        )
    }
}
    
export default Query