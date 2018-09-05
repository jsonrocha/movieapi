import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingleMovie from './SingleMovie'

class MovieList extends Component {
    render() {
        return (
            <section className="movielist">
                {this.props.movies.map((movie, i) => {
                    return (
                        <section key={i}>
                            <Link
                                to={{pathname: `/Movie/${i}`,
                                state: {movies: this.props.movies}
                                }} key={i}>
                                <SingleMovie key={i} movie={movie} />
                            </Link>
                        </section>
                    );
                })}
            </section>
        );
    }
}

export default MovieList;