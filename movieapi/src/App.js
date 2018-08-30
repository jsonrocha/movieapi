import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {

 //API KEY {e68c1a67b9b6a0fff17d9ed980ca72cf}
 //API Read Access Token {yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjhjMWE2N2I5YjZhMGZmZjE3ZDllZDk4MGNhNzJjZiIsInN1YiI6IjViODgzNmUyYzNhMzY4MWZlYzAxNWUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6805CbmV7wyHtccC5-Fzm4J9O9s9m6QhZnBDmfufA0c}
 //Example Request {https://api.themoviedb.org/3/movie/550?api_key=e68c1a67b9b6a0fff17d9ed980ca72cf}

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
