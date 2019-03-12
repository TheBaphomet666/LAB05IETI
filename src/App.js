import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Components/Login"
import Drawer from "./Components/Drawer"

class App extends Component {
constructor(props) {
        super(props);
        localStorage.setItem('User',"Baphomet");
        localStorage.setItem('Password',"666");



    }

  render() {
    return (
        <Router>
            <div>
                <div className="App">
                    <header className="App-header">

                        {localStorage.getItem('IsLoggedIn')==="true"
                                         ? <li> <Route exact path="/" component={Drawer}/></li>
                                         : <li><Route exact path="/" component={Login}/></li>
                        }
                    </header>
                </div>

            </div>
        </Router>
    );
  }
}

export default App;
