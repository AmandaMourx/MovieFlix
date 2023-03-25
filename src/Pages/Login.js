import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import '../Styles/Login.css'
import Cadastro from './Cadastro';

export default function Login() {
  return (
    <div className='login--page'>
      
      <div className='login--container'>
          <h2>Entrar</h2>
          <input type="text" placeholder='E-mail'></input>
          <input className='login--password' type="password" placeholder='Senha'></input>
          <button className='login--enter'>Entrar</button>
            <h3>Ou</h3>
          <Link to="/Cadastro"><button className='login--new' >Criar nova conta</button></Link>
          <Routes>
            <Route path="/Cadastro" component={Cadastro}></Route>
          </Routes>
      </div>

    </div>

  )
}
