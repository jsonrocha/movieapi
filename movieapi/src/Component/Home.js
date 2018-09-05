import React, { Component } from 'react';
import MovieList from './MovieList'

class Home extends Component {

    render() {
        return (
            <div>
                <MovieList movies={this.props.movies} />
            </div>
        );
    }
}

export default Home;