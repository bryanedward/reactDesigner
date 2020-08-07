import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './components/containersSecond/App';
// import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(<MyApp />, document.getElementById('root'));


serviceWorker.unregister();

