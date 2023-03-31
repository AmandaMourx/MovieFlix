import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import MeuPerfil from './Pages/MeuPerfil'
import Postagens from './Pages/Postagens';

import SeachPage from './Pages/SeachPage';
import MoviesAction from './Pages/MoviesAction';
import MoviesHorror from './Pages/MoviesHorror';
import MoviesComedy from './Pages/MoviesComedy';
import Home from './Pages/HomeLogado'

// 1 - configurando o router
import{
  createBrowserRouter, RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/MoviesAction',
    element: <MoviesAction />
  },
  {
    path: '/MoviesHorror',
    element: <MoviesHorror />
  },
  {
    path: '/MoviesComedy',
    element: <MoviesComedy />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  {
    path: '/meu-perfil',
    element: <MeuPerfil />
  },
  {
    path: '/postagens',
    element: <Postagens />
  },
  {
    path: 'search-page',
    element: <SeachPage/>
  },
  {
    path: 'home',
    element: <Home/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
