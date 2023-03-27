import React, { Fragment, useEffect, useState } from 'react';
import MovieContent from "../Components/ModalContent.js"
import NaveBar from '../Components/NaveBar';
import '../Styles/MoviesCateg.css';

function MoviesHorror () {
  const APIURL = 'https://api.themoviedb.org/3/discover/movie?with_genres=27&language=pt-BR&api_key=84c2e94e58561d2845fbf2de10a1a1a5'
  
  const [moviesHorror, setMoviesHorror] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [movieSelect, setMovieSelect] = useState([]);

  useEffect(() => {
    fetch(APIURL)
      .then(res => res.json())
      .then(data => setMoviesHorror(data.results))
  }, [])

  function handleModal(movie){
    setIsOpen(!isOpen);
    let list = movie
    setMovieSelect(list)
  }

  return (
    <Fragment>
      <div className='navbar'>
        <NaveBar />
      </div>
      <div className='titleCategorie'>Filmes-Categoria: Terror</div>

      <div className='movies'>
        {moviesHorror.map((moviesHorror) => 
          <div className="movie-item">
            <img className="poster" src={`https://image.tmdb.org/t/p/w300${moviesHorror.poster_path}`} alt={moviesHorror.original_title} onClick = {() => handleModal(moviesHorror)}/>
            {/* <p className='title_movies'>{moviesAction.title}</p> */}
          </div>
        )}
      </div>
      <MovieContent open={isOpen} movie = {movieSelect} onClose={()=> setIsOpen(false)} />
    </Fragment>
  )
}

export default MoviesHorror