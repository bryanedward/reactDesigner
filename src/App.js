import React, { Component } from 'react';
// import './App.css';
// import 'bulma/css/bulma.css'
import { Route, Switch } from 'react-router-dom'
// import VistaPeliculas from './views/VistaPeliculas'
// import Home from  './pages/Home'
// import WbPalyer from './components/containers/WbnPlayer';
import WbnPlayer from './components/containers/WbnPlayer';
import { NotFound } from './views/NoteFound';
import GlobalStyle  from './components/styles/GlobalStyle';

class App extends Component {
  render(){
    return(
    <div className="App">
      <Switch>
        <Route exact path='/' component={WbnPlayer}/>
        <Route exact path='/:idVideo' component={WbnPlayer}/>
        <Route component={NotFound} />
        {/* <Route exact path='/' component={Home}/>
        <Route path = '/VistaPeliculas/:Idimdb' component={VistaPeliculas}/>*/}
      </Switch>
      <GlobalStyle/>
    </div>
    )
  }  
}

export default App;
