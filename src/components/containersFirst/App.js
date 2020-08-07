import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Route, Switch } from 'react-router-dom'
import VistaPeliculas from './views/VistaPeliculas'
import Home from  './pages/Home'

const App = () => (   
    <div className="App">
      <Switch>  
        <Route exact path='/' component={Home}/>
        <Route path = '/VistaPeliculas/:Idimdb' component={VistaPeliculas}/>
      </Switch>
    </div>
    
    
)

export default App;
