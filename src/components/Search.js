import React, { Component } from 'react'


const API_KEY = 'b40d5b28';

export class Search  extends Component {
    
    state = {
        nombrePelicula : ' '
    }


    _setearDato = (e) => {
        // capturar el dato
        this.setState({nombrePelicula : e.target.value})
    }

    _ConsultaApi = (e) => {
        e.preventDefault()
        fetch(`https://www.omdbapi.com/?s=${this.state.nombrePelicula}&apikey=${API_KEY}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(this.props.name)
            });
    }


    render(){
        return(
            <form onSubmit= {this._ConsultaApi}>
                <div className="field has-addons">
                <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        onChange = {this._setearDato}
                        placeholder="Buscar pelicula"/>
                </div>
                <div className="control">
                    <button className="button is-info">
                    Search
                    </button>
                </div>
                </div>
            </form>
            
        )
    }

}


