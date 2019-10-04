import  React from 'react'
import MovieList from './MovieList';


const MovieOnClick = [];

function MoviePage(props) {
    const MovieOnClick = Movielist.find(movie => props.match.params.id === `${movie.id}`);
    return (
        <div>
         <h1>{movie.title}</h1>
        </div> 
        
    )
}

export default MovieOnClick;