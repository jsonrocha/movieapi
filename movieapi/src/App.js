import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MovieList from './Component/MovieList';
import NavBar from './Component/NavBar';
import MovieDetail from './Component/MovieDetail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviePoster: {}
    };
  }
  baseURL = "https://api.themoviedb.org/3/movie/now_playing?api_key="
  key = "e68c1a67b9b6a0fff17d9ed980ca72cf"
  tmp = "https://api.themoviedb.org/3/movie/now_playing?api_key=e68c1a67b9b6a0fff17d9ed980ca72cf"
  imageURL = "https://image.tmdb.org/t/p/"
  imageSize = "w200"

  componentDidMount() {
    this.getJSON()
    this.getMoviePoster("/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg")
  }

  getJSON = () => {
    fetch(this.baseURL + this.key + "&page=1"

    )
      .then(resp => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          return <section>Failure to Load Page</section>;
        }
      })
      .then(json => {
        // console.log(json);
        this.setState({
          movies: json.results
        });
      });
  }

  getMoviePoster = (imagePath) => {
    fetch(this.imageURL + this.imageSize + imagePath

    )
      .then(resp => {
        if (resp.status === 200) {
          return resp.blob();
        } else {
          return <section><img src="./images/404.jpg" /></section>;
        }
      })
      .then(poster => {

        this.setState({
          moviePoster: poster
        });
      });
  }


  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">

          <section className="mainheader">
          <img src="./images/405.jpg" />
          < NavBar />
          </section>

        </header>  
        <Switch>
           <Route path="/nowshowing" exact component={MovieList} />
           <Route path="/moviedetails" exact component={MovieDetail} />
         </Switch>
        <section className="movielist">

          <MovieList movies={this.state.movies} />

        </section>
      </div>
      </Router>
    );
  }
}

export default App;