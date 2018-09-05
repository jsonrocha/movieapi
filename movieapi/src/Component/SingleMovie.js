import React, { Component } from 'react';

const imageURL = 'https://image.tmdb.org/t/p/'
const imageSize = 'w200'

class SingleMovie extends Component {
    render() {
        const image_width = this.props.imageWidth
        let movie = this.props.movie
        return (
            <section className="moviebox">
                <h3>{movie.title}</h3>
                <img className="image"
                src={imageURL + imageSize + movie.poster_path} 
                alt={movie.title} 
                />
            </section>
        );
    }
}

export default SingleMovie;