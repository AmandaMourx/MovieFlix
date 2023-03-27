import React from 'react';
import '../Styles/MoviesCateg.css';

const MovieCard = (props) => {

  const API_IMAGE ='https://image.tmdb.org/t/p/w300'

  return (
    <div className='movie_card'>
      <div className='all_info'>
        <div className='poster'>
          <img src={API_IMAGE + props.poster_path} alt='poster do filme'/>
        </div>

        <p className='title_movies'>{props.title}</p>
      </div>
    </div>
  )
}

export default MovieCard
