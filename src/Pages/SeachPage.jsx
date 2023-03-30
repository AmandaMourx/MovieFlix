import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../Styles/SearchPage.css";
import NaveBar from "../Components/NaveBar";
import BotaoVoltar from "../Components/BotaoVoltar";
import MovieContent from "../Components/ModalContent.js"

function SeachPage() {
  const [searchParams] = useSearchParams();
  const [movieSearch, setMovieSearch] = useState([]);
  const query = searchParams.get("q");
  const completeSearchURL=`https://api.themoviedb.org/3/search/movie?&language=pt-BR&api_key=de38fb33cf7eec13150cabee0c89979c&query=${query}`

  const [isOpen, setIsOpen] = useState(false);
  const [movieSelect, setMovieSelect] = useState([]);

  useEffect(() => {
    fetch(completeSearchURL)
      .then((res) => res.json())
      .then((data) => setMovieSearch(data.results));
  }, [query]);

  function handleModal(movie){
    setIsOpen(!isOpen);
    let list = movie;
    setMovieSelect(list);
  }


  return (
    <>
      <div className="navbar">
        <NaveBar />
      </div>
      <BotaoVoltar />
      <div className="title">
        Resultados para: <span className="query-text">{query}</span>
      </div>
      <div className="movies">
        {movieSearch.map((movieSearch) => (
        <div className="movie-item">
            <img className="poster" src={`https://image.tmdb.org/t/p/w300${movieSearch.poster_path}`} alt={movieSearch.original_title} onClick = {() => handleModal(movieSearch)}/>
            {/* <p className='title_movies'>{moviesAction.title}</p> */}
        </div>
        
        ))}
      </div>
      <MovieContent open={isOpen} movie = {movieSelect} onClose={()=> setIsOpen(false)} />
      
    </>
  );
}

export default SeachPage;
