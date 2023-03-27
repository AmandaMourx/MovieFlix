import React, { Fragment, useEffect, useState } from "react";
import MovieContent from "../Components/ModalContent.js"
import NaveBar from "../Components/NaveBar";
import "../Styles/MoviesCateg.css";

import BotaoVoltar from "../Components/BotaoVoltar";

function MoviesAction(items) {
  const APIURL = "https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR&api_key=84c2e94e58561d2845fbf2de10a1a1a5";

  const [moviesAction, setMoviesAction] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [movieSelect, setMovieSelect] = useState([]);

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => setMoviesAction(data.results));

  }, []);

  function handleModal(movie){
    setIsOpen(!isOpen);
    let list = movie
    setMovieSelect(list)
  }

  return (
    <Fragment>
      <div className="navbar">
        <NaveBar />
      </div>
      <div className="titleCategorie">Filmes de Ação</div>
      <BotaoVoltar />
      <div className="movies">
        {moviesAction.map((moviesAction) => (
        <div className="movie-item">
            <img className="poster" src={`https://image.tmdb.org/t/p/w300${moviesAction.poster_path}`} alt={moviesAction.original_title} onClick = {() => handleModal(moviesAction)}/>
            {/* <p className='title_movies'>{moviesAction.title}</p> */}
        </div>
        
        ))}
      </div>
      <MovieContent open={isOpen} movie = {movieSelect} onClose={()=> setIsOpen(false)} />
    </Fragment>
  );
}

export default MoviesAction;
