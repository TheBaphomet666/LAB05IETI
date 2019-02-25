import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Components/Login"
import Drawer from "./Components/Drawer"

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <div className="App">
                    <header className="App-header">

                        <Route exact path="/" component={Login}/>
                        <Route exact path="/" component={Drawer}/>
                    </header>
                </div>

            </div>
        </Router>
    );
  }
}

export default App;
