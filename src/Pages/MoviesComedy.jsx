import React, { Fragment, useEffect, useState } from 'react';
import MovieCard from '../Components/MovieCard';
import NaveBar from '../Components/NaveBar';
import '../Styles/MoviesCateg.css';

function MoviesComedy () {
  const APIURL = 'https://api.themoviedb.org/3/discover/movie?with_genres=35&language=pt-BR&api_key=84c2e94e58561d2845fbf2de10a1a1a5'
  
  const [moviesComedy, setMoviesComedy] = useState([]);

  useEffect(() => {
    fetch(APIURL)
      .then(res => res.json())
      .then(data => setMoviesComedy(data.results))
  }, [])

  return (
    <Fragment>
      <div className='navbar'>
        <NaveBar />
      </div>
      <div className='titleCategorie'>Filmes-Categoria: Comédia</div>

      <div className='movies'>
        {moviesComedy.map((moviesComedy) => 
          <MovieCard {...moviesComedy}/>
        )}
      </div>
    </Fragment>
  )
}

export default MoviesComedy