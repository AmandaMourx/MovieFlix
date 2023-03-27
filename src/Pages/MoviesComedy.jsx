import React, { Fragment, useEffect, useState } from 'react';
import BotaoVoltar from '../Components/BotaoVoltar';
import MovieContent from "../Components/ModalContent.js"
import NaveBar from '../Components/NaveBar';
import '../Styles/MoviesCateg.css';

function MoviesComedy () {
  const APIURL = 'https://api.themoviedb.org/3/discover/movie?with_genres=35&language=pt-BR&api_key=84c2e94e58561d2845fbf2de10a1a1a5'
  
  const [moviesComedy, setMoviesComedy] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [movieSelect, setMovieSelect] = useState([]);

  useEffect(() => {
    fetch(APIURL)
      .then(res => res.json())
      .then(data => setMoviesComedy(data.results))
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
      <BotaoVoltar />
      <div className='titleCategorie'>Filmes de comédia</div>
    
      <div className='movies'>
        {moviesComedy.map((moviesComedy) => 
          <MovieCard {...moviesComedy}/>
        )}
      </div>

      <div className="movies">
        {moviesComedy.map((moviesComedy) => (
        <div className="movie-item">
            <img className="poster" src={`https://image.tmdb.org/t/p/w300${moviesComedy.poster_path}`} alt={moviesComedy.original_title} onClick = {() => handleModal(moviesComedy)}/>
            {/* <p className='title_movies'>{moviesAction.title}</p> */}
        </div>
        
        ))}
      </div>
      <MovieContent open={isOpen} movie = {movieSelect} onClose={()=> setIsOpen(false)} />
    
    </Fragment>
  )
}

export default MoviesComedy
