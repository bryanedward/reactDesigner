import React, { Component } from 'react'
import Search from '../components/Search';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export default class Home extends Component {

  state = {
    validar: false,
    peliculas: []
  }

  _data = (response) => {
    this.setState({ peliculas: response, validar: true })
  }

  _mostrarMnensaje() {
    return this.state.peliculas.length === 0
      ? 'Sin Resultados'
      : <MovieList
        peliculas={this.state.peliculas} />
  }

  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="container is-fluid">
            <h1 className="title">
              Hola mundo
            </h1>
            <p className="subtitle">
              Demo de un buscador diseñado con React, Bulma y colaboración con <strong>omdbapi.com</strong>!
            </p>
            <div className="search">
              <Search
                onData={this._data} />
            </div>
            <div>
              {this.state.validar
                ? this._mostrarMnensaje()
                : <small> Ingresar datos </small>
              }
            </div>
          </div>
        </section>
        <Footer/>
       </div>
    )
  }
}