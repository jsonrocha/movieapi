import React, { Component } from 'react';
import '../App.css';

class MovieDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'loading...',
            quotes: '',
            results: []
        }
    };

    componentDidMount() {
        let movieId =this.props.match.params.movieId
        setInterval(() => {
            const _url = "https://api.themoviedb.org/3/movie/now_playing?api_key=e68c1a67b9b6a0fff17d9ed980ca72cf"
            fetch(_url).then(resp => resp.json())
                .then(nowPlayingList => {
                    console.log(nowPlayingList)
                    this.setState({
                        name:nowPlayingList.results[movieId].title,
                        date:nowPlayingList.results[movieId].release_date,
                        overview: nowPlayingList.results[movieId].overview,
                        poster: nowPlayingList.results[movieId].poster_path
                      
                    })
                })
       })
   };
   render() {
    const imageURL = 'https://image.tmdb.org/t/p/'
    const imageSize = 'w300'
       return (
           <div className="Poster">
                <img className="image"
                src={imageURL + imageSize + this.state.poster} 
                alt={this.state.name} />
               <ul className="details">
                   <li>Title: {this.state.name}</li>
                   <li>Release Date: {this.state.date}</li>
                   <li>Overview: {this.state.overview}</li>
                   </ul>
           </div>
       )
   }
}

export default MovieDetail;