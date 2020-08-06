import React, { Component } from 'react'


const API_KEY = 'b40d5b28';

export default class Search  extends Component {
    
    state = {
        nombrePelicula : ' '
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
                    <button className="button is-info is-outlined">
                        Buscar
                    </button>
                </div>
                </div>
            </form>
        )
    }
    _setearDato = (e) => {
        // capturar el dato
        this.setState({nombrePelicula : e.target.value})
    }

    _ConsultaApi = (e) => {
        e.preventDefault()
        fetch(`https://www.omdbapi.com/?s=${this.state.nombrePelicula}&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(results => {
                // asignacion de un array para ingresar
                const {Search = []} = results
                console.log(Search)
                this.props.onData(Search)
            });
    }
}


