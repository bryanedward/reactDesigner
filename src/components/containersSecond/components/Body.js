import React from 'react';
import Card from './CardContact';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;



const MyBody = () => (
    <div>
        <Card contact={{ name: "gatoman", imgUrl: "https://url2.cl/6vsF8" }} />
        <Card contact={{name:"super", last_name:"gato", imgUrl:"https://url2.cl/6vsF8"}}/>
        <Card contact={{ name:"gato", last_name:"man", imgUrl:"https://url2.cl/6vsF8"}}/>
        <Button>Normal Button</Button>

        
    </div>
)


export default MyBody;