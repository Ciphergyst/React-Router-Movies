import React from 'react';
import { Link } from 'react-router-dom';



const MovieCard = props => {
  
 

 return (
  <div className="movie-card">
      <h2>
        <Link to={`/movies/${props.movie.id}`}>{props.movie.title}</Link>
      </h2>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.movie.stars.map((star, index) => (
        <div key={index} className="movie-star">
          {props.movie.star}
        </div>
      ))}
    </div>
  );

};   
  
 
export default MovieCard;