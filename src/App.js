import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./Components/Login"
import Drawer from "./Components/Drawer"
import NewTask from "./Components/NewTask"
import Register from "./Components/Register"

class App extends Component {
constructor(props) {
        super(props);
        localStorage.setItem('User',"Baphomet");
        localStorage.setItem('Password',"666");



    }


   render() {
      let routeOptions;
      if (localStorage.getItem('IsLoggedIn')==="true") {

        routeOptions = (
          <Switch>
            <Route exact path="/Tasks" component={Drawer}/>
            <Route exact path="/NewTask" component={NewTask}/>

            <Redirect to="/Tasks" />
          </Switch>


        );
      }else {
        routeOptions = (
          <Switch>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Register" component={Register}/>
            <Redirect to="/Login" />
          </Switch>
        );
      }
      return (
        <div>
          <Router>{routeOptions}</Router>
        </div>
      );
    }
}



export default App;
