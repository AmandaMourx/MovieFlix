import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login--page'>
      <div className='login--container'>
          <h2 className='title'>Entrar</h2>
          <input className='login--input' type="text" placeholder='E-mail'></input>
          <input className='login--password login--input' type="password" placeholder='Senha'></input>
          <button className='login--enter login--button'>Entrar</button>
            <h3>Ou</h3>
          <button className='login--new login--button' >Criar nova conta</button>
      </div>
    </div>
  )
}
