import React from 'react'
import '../Styles/Login.css'
import '../Styles/Login.css'
import { Routes,Route,Link } from 'react-router-dom'
import MeuPerfil from "./MeuPerfil";

export default function Cadastro() {
  return (
    <div className='login--page'>
    <div className='login--container'>
        <h2>Criar conta</h2>
        <input className='login--input' type="text" placeholder='E-mail'></input>
        <input className='login--input' type="text" placeholder='Nome de usuário'></input>
        <input className='login--input' type="password" placeholder='Senha'></input>
        <input className='login--input' type="password" placeholder='Confirme sua senha'></input>
        <Link to="/meu-perfil"><button className='login--button'>Criar conta</button></Link>
        <Routes>
          <Route path="/meu-perfil" component={MeuPerfil}></Route>
        </Routes>
    </div>
  </div>
  )
}
