import React, { Component } from 'react'
import Search from '../components/Search';
import MovieList from '../components/MovieList';


export default class Home  extends Component{

    state = {
        validar : false,
        peliculas : []
    }
    
    _data = (response) => {
        this.setState({peliculas: response, validar: true})    
    }
    
    _mostrarMnensaje(){
    return  this.state.peliculas.length === 0 
            ? 'Sin Resultados'
              : <MovieList 
                peliculas = {this.state.peliculas} />  
    }
    
    render(){
        return(
          <div>
            <div className="search">
                <Search
                onData = {this._data}/>
            </div>                  
            <div>
                {this.state.validar 
                ? this._mostrarMnensaje() 
                : <small> Ingresar datos </small> 
                }
            </div>
          </div>           
        )
    }
}