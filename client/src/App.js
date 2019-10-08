import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard';
// import MoviePage from './MoviePage';

const App = (props) => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <BrowserRouter>
      <Route exact path="/" component={MovieList} />
      console.log()
      <Route path="/movieList/:id" 
      render={props => <Movie movie={Movie} />} />
       
      <MovieCard />
      
      </BrowserRouter>

    </div>
  );
};

export default App;
