import React, { Fragment, useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard';


function MoviesAction () {
  const APIURL = 'https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR&api_key=84c2e94e58561d2845fbf2de10a1a1a5'
  
  const [moviesAction, setMoviesAction] = useState([]);

  useEffect(() => {
    fetch(APIURL)
      .then(res => res.json())
      .then(data => setMoviesAction(data.results))
  }, [])

  console.log(moviesAction);


  return (
    <Fragment>
      <div className='titleAction'>MoviesAction</div>

      <div className='moviesAction'>
        {moviesAction.map((moviesAction) => 
          <MovieCard />
        )}
      </div>

    </Fragment>
  )
}

export default MoviesAction