import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/Kennel';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './Locations.css';


ReactDOM.render(
    <body>
    <Router>
        <Kennel />
    </Router>
    </body>
    , document.getElementById('root'));
    

registerServiceWorker();





