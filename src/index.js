import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Perfil from './Pages/MeuPerfil'
import Postagens from './Pages/Postagens';

import Movies_Action from './Pages/Movies_Action';
import Movies_Horror from './Pages/Movies_Horror';
import Movies_Comedy from './Pages/Movies_Comedy';

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
    path: '/Movies_Action',
    element: <Movies_Action />
  },
  {
    path: '/Movies_Horror',
    element: <Movies_Horror />
  },
  {
    path: '/Movies_Comedy',
    element: <Movies_Comedy />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'cadastro',
    element: <Cadastro />
  },
  {
    path: 'meu-perfil',
    element: <Perfil />
  },
  {
    path: 'postagens',
    element: <Postagens />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
