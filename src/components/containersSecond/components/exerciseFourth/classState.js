import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;



class ClassState extends Component{
    constructor(){
        super();
        this.state = {
            name: "State",
            img: "https://url2.cl/DeVHQ"
        }
    }

    render(){
        function PassPhoto() {
            console.log('preparando el state!!');
        }

        return(
            <div>
            <h1 onMouseOver={() => console.log('how are u feelin')}>{this.state.name}</h1>
            <img src={this.state.img} alt={this.state.name}/>
            <hr/>
            <Button onClick={PassPhoto}>Accionar state</Button>
            </div>            
        )
    }

}

export default ClassState;