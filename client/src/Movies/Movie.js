import React, { Component } from 'react';
import axios from 'axios';


export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount(){
    const id = this.props.match.id;
    this.fetchMovie(id);
  }


  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
       .then(response => {
         this.setState(() => ({ movie: response.data }));
       })
       .catch(error => {
         console.error(error);
       });
  };
  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie)
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie info...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className='save-wrapper'>
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
          </div>
           <div className="save-button"
           onClick={() => {
             this.props.addToSavedList(this.state.movie);
           }}
           >
             Save
           </div>
        </div>   
    );
  }


}
  
 
    
        // <MovieCard saveMovie={saveMovie} title={title} director={director} metascore={metascore} stars={stars} />
      

