import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Registration from "./Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import { Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Router>
        <Typography>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Registration} />
              <Route path="/Login" component={Login} />
              <Route path="/Welcome" component={Welcome} />
            </Switch>
          </div>
        </Typography>
      </Router>
    );
  }
}

export default App;



