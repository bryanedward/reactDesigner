import React from 'react';
import styled from 'styled-components';

const StyleS = {
    margin: '10px',
    border: '1px solid black',
    padding: '10px'
}

const H1 = styled.h1`
    color: red
`;

const Span = styled.span`
    color: pink
`;

const BodiedTwo = (props) => (
    <div style={StyleS}>
        <H1>{props.item.id}</H1>
        <Span>{props.item.name}</Span>
        <input
            type='checkbox'
            checked={props.item.validated}
            onChange={() => props.handledCheck(props.item.id)} />
        <br />
        <small>{props.item.lastName}</small>
    </div>
)

export default BodiedTwo;