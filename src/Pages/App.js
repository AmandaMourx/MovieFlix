import '../Styles/App.css';
import Tmdb from '../Tmdb';
import React, {useEffect, useState} from 'react';
import MovieRow from '../Components/movieRow';
import NaveBar from '../Components/NaveBar';
import Hero from '../Components/HeroSection';
import '../Styles/HeroSection.css'
import { Outlet } from 'react-router-dom';

function App() {
  
  const [movieList, setMovieList] = useState([]);

  // Quando a pagina é carregada o codigo dentro do useEffect é executado
  useEffect( () => {
    const loadAll = async () => {
      //pegando a lista de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(list)
    }

    loadAll();
  }, []);
  
  return (
    <div className='home-page'>
      <NaveBar fullwidth/>
      <Outlet/>
      <Hero/>
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;
