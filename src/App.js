import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Route, Switch } from 'react-router-dom'
import VistaPeliculas from './views/VistaPeliculas'
import Home from  './pages/Home'
import {NotFound} from './views/NoteFound'

class App extends Component {
  render(){
    return(
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path = '/VistaPeliculas/:Idimdb' component={VistaPeliculas}/>
        <Route component ={NotFound}/>
      </Switch>
    </div>
    )
  }  
}

export default App;
