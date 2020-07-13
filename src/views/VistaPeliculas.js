import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {ButtonBack} from '../components/Button';

const API_KEY = 'b40d5b28';


export default class VistaPeliculas  extends Component{

    state = { movie: {} }

    static propTypes = {
            match : PropTypes.shape({
            params : PropTypes.object,
            isExact : PropTypes.bool,
            path : PropTypes.string,
            url : PropTypes.string
        })
    }

    componentDidMount(){
        // console.log(this.props.match.params.Idimdb)
        const { Idimdb } = this.props.match.params;
        
        this._consultarPelicula({Idimdb})
    }

    _consultarPelicula({Idimdb}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${Idimdb}`)
            .then(res => res.json())
            .then(results => {
                // asignacion de un array para ingresar
                this.setState({ movie : results})
            });
    }


    

    render(){
        const { Actors, Awards, Genre, Poster, Title, Years  } = this.state.movie
        return(
            <div className="card">
            
            <ButtonBack />            
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={Poster} alt={Poster}/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  
                </div>
                <div className="media-content">
                  <p className="title is-4">{Title}</p>
                  <p className="subtitle is-6">{Years}</p>
                </div>
              </div>
          
              <div className="content">
                {Actors}
                <br/>
                <p>{Genre}</p>
                <br/>
                <p>{Awards}</p>
              </div>
            </div>
          </div>
        ) 
        
    }
}

