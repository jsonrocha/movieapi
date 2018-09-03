import React, { Component } from "react";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      moviePoster: {}
    };
  }
  baseURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
  key = "e68c1a67b9b6a0fff17d9ed980ca72cf";
  tmp =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=e68c1a67b9b6a0fff17d9ed980ca72cf";
  imageURL = "https://image.tmdb.org/t/p/";
  imageSize = "w200";

  componentDidMount() {
    this.getJSON();
    this.getMoviePoster("/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg");
  }

  getJSON = () => {
    fetch(this.baseURL + this.key + "&page=1")
      .then(resp => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          return <section>Failure to Load Page</section>;
        }
      })
      .then(json => {
        this.setState({
          movie: json.results
        });
      });
  };

  getMovieDetails = () => fetch(this.baseURL + this.imageURL);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="mainheader">
            <img src="./images/405.jpg" />
          </section>
        </header>
        <section className="movielist" />
      </div>
    );
  }
}

export default MovieDetail;
