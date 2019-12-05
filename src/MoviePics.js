import React from 'react'

class MoviePics extends React.Component{
    constructor (props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(event) {
        this.props.selected(this.props.search.imdbID);
    }

    render(){
        const {Title:title, Type:type, Year:year, imdbID:id, Poster:pic} = this.props.search
        return(
            <>
                <Picture link = {pic} alt = {title} id={id} clicked = {this.handleSelection}/>
                <p> {title} </p>
                <p> Type : {type} </p>
                <p> Released : {year} </p>
                <p> IMDB id : {id} </p>
            </>
        )
    }
}

const Picture = (props) => {
    const {link:pic} = props
    return(
        <div>
            <img src= {pic} alt = {pic} onClick = {props.clicked}/>
        </div>
    )
   
}
export default MoviePics;