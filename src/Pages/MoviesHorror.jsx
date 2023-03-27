import React, { Fragment, useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';
import NaveBar from '../Components/NaveBar';
import '../Styles/MoviesCateg.css';

function MoviesHorror () {
  const APIURL = 'https://api.themoviedb.org/3/discover/movie?with_genres=27&language=pt-BR&api_key=84c2e94e58561d2845fbf2de10a1a1a5'
  
  const [moviesHorror, setMoviesHorror] = useState([]);

  useEffect(() => {
    fetch(APIURL)
      .then(res => res.json())
      .then(data => setMoviesHorror(data.results))
  }, [])

  console.log(moviesHorror);

  return (
    <Fragment>
      <div className='navbar'>
        <NaveBar />
      </div>
      <div className='titleCategorie'>Filmes-Categoria: Terror</div>

      <div className='movies'>
        {moviesHorror.map((moviesHorror) => 
          <MovieCard {...moviesHorror}/>
        )}
      </div>
    </Fragment>
  )
}

export default MoviesHorror