import React  from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main'
import Dz01 from './components/dz/Dz01'
import Dz02 from './components/dz/Dz02'
import Dz03 from './components/dz/Dz03'
import Dz04 from './components/dz/Dz04'

import Dz06 from './components/dz/Dz06'

import './bootstrap.css'
import './App.css';

class App extends React.Component {

  render() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/dz01">
                        <Dz01 />
                    </Route>
                    <Route path="/dz02">
                        <Dz02 />
                    </Route>
                    <Route path="/dz03">
                        <Dz03 />
                    </Route>
                    <Route path="/dz04">
                        <Dz04 />
                    </Route>
                    <Route path="/dz06">
                        <Dz06 />
                    </Route>
                </div>
            </Router>
        </div>
    );

  }
}

export default App;
