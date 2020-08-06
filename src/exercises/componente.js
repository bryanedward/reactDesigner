import React, { Component } from 'react'
import PropTypes from 'prop-types';





function BtnComponentSuccess(props){
    return(
        <section>
            <h1>{props.author}</h1>
            <p>{props.date}</p>
        </section>
    )
}

    
BtnComponentSuccess.propTypes  = {
    author: PropTypes.string.isRequired
}



class componentes extends Component{

    render(){
        return(
            
                <BtnComponentSuccess
                author = 'edward'
                date = {new Date().toLocaleDateString()}
                
                />
        )
    }
}


export default componentes;
