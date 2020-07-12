import React, {StrictMode, Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Title} from './components/Title'
import {Search} from './components/Search'

class App extends Component {


  state = {
    respuestas : []
  }

  _obtenerDatos = (respuestas) => {
    console.log(respuestas)
  }

  render(){
    return (
      <StrictMode>
      <div className="App">
        <Title>Hola desde la pagina de  brian</Title>
        <div className='search'>
          <Search name = "hola"/>
        </div>
      </div>
      </StrictMode>
    );
  }
  
}

export default App;
