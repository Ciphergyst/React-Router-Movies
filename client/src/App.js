import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';

import SavedList from './Movies/SavedList';

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
      <Route path="/movieList/:id" component={Movie} />
      <MovieCard />
      </BrowserRouter>
      <div>
      <Route path="/movies/:id" render={(props) => <Movie addToSavedList={addToSavedList} {...props} />} />
      </div>
    </div>
  );
};

export default App;
      
      
      
      
      
      // {/* <Route exact path="/" render={(props) => <MovieList addToSavedList={addToSavedList} {...props} />} />
      // <Route path="/movies/:id" render={(props) => <Movie addToSavedList={addToSavedList} {...props} />} /> */}
      
      
      

   
