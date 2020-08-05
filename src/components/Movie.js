import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class Movie extends Component{
    
    static propTypes = {
        Title : PropTypes.string,
        Poster : PropTypes.string,
        Year: PropTypes.string,
        Type: PropTypes.string,
        Idimdb : PropTypes.string
    }
    
    render(){
        const { Title, Poster, Year, Type, Idimdb } = this.props
        return(
            <Link className="card" to = {`/VistaPeliculas/${Idimdb}`}>
                <div className="card-image">
                    <figure className="image ">
                    <img src= {Poster}
                    alt={Title}/>
                    </figure>
                    <div className="media-content">
                        {/* <p className="title is-4">{Title}</p> */}
                        <p className="subtitle is-6">{Type}</p>
                        <p>{Year}</p>
                    </div>
                </div>
                <br/>
            </Link>
        )
    }
}