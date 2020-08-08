import React, { Component } from 'react';
import styled from 'styled-components';


const StyleS = styled.div`
    padding: 10px
`;


class ChangeState extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(function(props){
            return{
                count: props.count + 1
            }
        })
        
    }

    render() {
        return (
            <StyleS>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change</button>
            </StyleS>
        )
    }
}


export default ChangeState;