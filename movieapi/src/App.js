import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    fetch("")
    .then(resp => {
      if (resp.status === 200){
        return resp.json()
      } else {
        //handle the error somehow
      }
    })
    .then(json => {
      console.log(json)
    })
  }
  render() {
    return (
      <Router>
      <div className="App">
      </div>
      </Router>
    );
  }
}

export default App;
