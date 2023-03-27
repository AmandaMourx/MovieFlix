import React, { Fragment, useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import NaveBar from "../Components/NaveBar";
import "../Styles/MoviesCateg.css";

function MoviesAction(items) {
  const APIURL =
    "https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR&api_key=84c2e94e58561d2845fbf2de10a1a1a5";

  const [moviesAction, setMoviesAction] = useState([]);

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => setMoviesAction(data.results));

  }, []);

  return (
    <Fragment>
      <div className="navbar">
        <NaveBar />
      </div>
      <div className="titleCategorie">Filmes-Categoria: Ação</div>

      <div className="movies">
        {moviesAction.map((moviesAction) => (
          <MovieCard {...moviesAction} />
        ))}
      </div>
    </Fragment>
  );
}

export default MoviesAction;
