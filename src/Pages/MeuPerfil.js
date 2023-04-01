import React from 'react';
import '../Styles/Perfil.css'
import BotaoVoltar from '../Components/BotaoVoltar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function MeuPerfil() {
  return (
    <div className='perfil--page'>
      <div className='perfil--container'>
        <div className='perfil--left'>
          <div className='botao-voltar'>
            <BotaoVoltar />
          </div>
          <AccountCircleIcon className='icon-cont' style={{fontSize: '12rem'}}/>  
          <h3>Minhas informações</h3>
        </div>  
        <div className='perfil--right'>
          <p className='perfil--title'>Visão geral</p>
          <div className='perfil--data'>
            <p className='perfil--text'>Nome de usuário</p>
            <p className='perfil--text'>Nome</p>
          </div>
          <div className='perfil--data'>
            <p className='perfil--text'>Endereço de e-mail</p>
            <p className='perfil--text'>E-mail</p>
          </div>
          <div className='perfil--data'>
            <p className='perfil--text'>Senha</p>
            <p className='perfil--text'>Senha</p>
          </div>
          
          
        </div>
          
      </div>
    </div>
  )
}
