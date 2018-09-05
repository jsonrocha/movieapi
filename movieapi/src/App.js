import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Styles/Page.css';
import Home from './Component/Home';
import MovieDetail from './Component/MovieDetail';
import NavBar from './Component/NavBar'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  baseURL = "https://api.themoviedb.org/3/movie/now_playing?api_key="
  key = "e68c1a67b9b6a0fff17d9ed980ca72cf"


  componentDidMount() {
    fetch(this.baseURL + this.key)
      .then(resp => resp.json())
      .then(moviesJson => {
        this.setState({
          movies: moviesJson.results
        });
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          <NavBar/>
          </header>
          <section>
            <div>
            <h1 className="bannertext">Now Playing</h1>
            </div>
            <Switch>
              <Route path="/" exact component={() => <Home movies={this.state.movies} />} />
              <Route path="/Movie/:movieId" exact component={MovieDetail} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;