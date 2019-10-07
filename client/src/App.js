import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Component } from 'react';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';

import SavedList from './Movies/SavedList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });

  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => (
        <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
    </div>
  );
};


      
}
