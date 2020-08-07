import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'


const Animales = {
    ardilla : 'https://hipertextual.com/files/2019/10/hipertextual-que-ningun-animal-tiene-tres-patas-2019533984.jpg',
    loro : 'https://okdiario.com/img/2020/02/03/animales-de-una-sola-pareja-en-su-vida.jpg',
    gatos : 'https://www.euroresidentes.com/hogar/mascotas/wp-content/uploads/sites/5/2014/09/santa-claus-papa-noel-gatos-vestidos-navidad-12.jpg'
}

const ObjectAnimal = Object.keys(Animales);



class ImagenesAnimales extends Component{
    // se obtiene la  prop del uusario
    state = { 
        src: Animales[this.props.animalUser]}
    
    componentWillReceiveProps (nexrProps){
        this.setState({ src : Animales[nexrProps.animalUser]})
    }

    shouldComponentUpdate(nextProps){
        return this.props.animalUser != nextProps.animalUser 
    // aplicar cuando la logica de programacion es mas complejaa
    }

    componentWillUpdate(nextProps, nextState){
        // los viejos datos aun estan disponibles podemos maniparlos aun
        const img  = document.querySelector('img');
        
        img.animate([ {
            filter:  'blur(0px)'
        },{
            filter:  'blur(2px)'
        }],{
            duration : 500,
            easing : 'ease'
        })
    }

    componentDidUpdate(){
        const img = document.querySelector('img');
        img.animate([ {
            filter:  'blur(2px)'
        },{
            filter:  'blur(0px)'
        }],{
            duration : 1500,
            easing : 'ease'
        })
    }
    
    render(){
        console.log('render')
        return(
            <div>
                <p>{this.props.animalUser}</p>
                <img 
                alt = {this.props.animalUser}
                src = {this.state.src} 
                width = '250'/>
            </div>
        )
    }

}

ImagenesAnimales.prototypes = {
    // definir los protypes que el uusario podra eligir
    animalUser : PropTypes.oneOf(ObjectAnimal)
}




export default class repositorios extends Component{

    state = { animalSeleccionado : 'ardilla'}
    
    _renderBoton =  (idAnimales) =>  {
        return (            

            <button 
                // disabled = { idAnimales === this.state.animalSeleccionado}
                key={idAnimales} 
                onClick={ () => this.setState({animalSeleccionado : idAnimales}) }>
                {idAnimales}
            </button>           
        )
    }


    render(){
        return(
            <div>
                {ObjectAnimal.map(this._renderBoton)}
                <ImagenesAnimales animalUser = {this.state.animalSeleccionado}/>
            </div>
        )
    }
}