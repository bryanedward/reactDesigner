import React, {Component} from 'react'
import PropTypes from 'prop-types'


const Animales = {
    ardilla : 'https://hipertextual.com/files/2019/10/hipertextual-que-ningun-animal-tiene-tres-patas-2019533984.jpg',
    loro : 'https://okdiario.com/img/2020/02/03/animales-de-una-sola-pareja-en-su-vida.jpg'
}




class ImagenesAnimales extends Component{
    // se obtiene la  prop del uusario
    state = { src: Animales[this.props.animalUser]}
    
    render(){
        return(
            <div>
                <p>{this.props.animalUser}</p>
            </div>
        )
    }

}

ImagenesAnimales.prototypes = {
    // definir los protypes que el uusario podra eligir
    animalUser : PropTypes.oneOf(['ardilla','loro'])
}

ImagenesAnimales.defaultProps = {
    animalUser : 'ardilla'
}


export default class repositorios extends Component{
    
    render(){
        return(
            <div>
                <ImagenesAnimales/>
            </div>
        )
    }
}