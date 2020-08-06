import React, { Component } from 'react'
import Movie from './Movie';
import PropTypes from 'prop-types';


export default class MovieList extends Component{

    static propTypes = {
        peliculas: PropTypes.array
    }
    
    render(){
        const {  peliculas  } = this.props
        return (
            <div className='listPeliculas'>
            {peliculas.map(res => {
                return(
                    <div key = {res.imdbID} className = 'listaItem'>
                        <Movie
                        Idimdb = {res.imdbID} 
                        Title = {res.Title}
                        Poster = {res.Poster}
                        Year = {res.Year}
                        Type = {res.Type}
                        />
                    </div>
                )
                })
            }     
            </div>
        )         
    }
}