// import PropTypes from 'prop-types'
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css"


const MOVIE_API = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'


class Home extends React.Component {
  state = {
    isLoading: true, 
    movies:[],   
  };

  async componentDidMount() {
    const {data: {data: {movies}}} = await axios.get(`${MOVIE_API}`) 
    this.setState({isLoading:false, movies})     
  };  

  render() {
    const { isLoading,movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loade__text">
              Loading...
            </span>

          </div>
          ):
          (
            <div className="movies">
              {movies.map(movie=>{
                return <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
                />
                })}
            </div>
          )
        }        
      </section>
    )
  }

}

export default Home;