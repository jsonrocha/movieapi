import React, { Component } from 'react';
import MovieDetail from './MovieDetail';
import { Link } from "react-router-dom";

class MovieList extends Component {
    key = "e99344bac0d2a5336621a8492eeb2e74"
    baseURL = "https://api.themoviedb.org/3/movie/now_playing?api_key="
    tmp = "https://api.themoviedb.org/3/movie/now_playing?api_key=e99344bac0d2a5336621a8492eeb2e74&language=en-US&page=1"
    imageURL = "https://image.tmdb.org/t/p/"
    imageSize = "w200"

    render() {
        return (
            <section className="movielist">
                {this.props.movies.map((movie, i) => {
                    // this.getMoviePoster(movie.poster_path)
                    return (
                        <ul id="movies_list_display" key={i}>
                            <li><Link to="/moviedetails">{movie.original_title}</Link></li>
                            <img id="movie" src={`${this.imageURL}${this.imageSize}${movie.poster_path}`} alt={movie.title}></img>
                        </ul>

                    )//END return

                }//END {this.state.movies.map((movie, i) => 
                )//END ((movies,i))
                }
            </section>
        )
    }
}


export default MovieList;