import React, { Component } from 'react';
import Search from './components/Search';
import './App.css';
import 'bulma/css/bulma.css'
import MovieList from './components/MovieList';


class App extends Component {
  
  state = {
    peliculas : []
  }

  _data = (response) => {
    this.setState({peliculas: response})
  }

  render(){
    return (
      <div className="App">
          <div className="search">
          <Search
            onData = {this._data}
          />
          </div>
          {this.state.peliculas.length === 0 
            ? 'Sin Resultados'
            : <MovieList 
              peliculas = {this.state.peliculas} /> 
          }          
      </div>
    );
  }
}

export default App;
