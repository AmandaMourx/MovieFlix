import React from 'react';
import '../Styles/Perfil.css'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useNavigate } from 'react-router-dom';
import BotaoLogOut from '../Components/BotaoLogOut';

export default function MeuPerfil() {
  
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/home');
  }
  
  return (
    <div className='perfil--page'>
      <div className='perfil--container'>
        <div className='perfil--left'>
         <div className='areavoltar' onClick={redirect}>
            <KeyboardBackspaceIcon style={{marginLeft: '-10rem', fontSize:'2rem', }}/><br></br><p className='voltar'>IR PARA AREA LOGADA</p>
          </div>
          <AccountCircleIcon className='icon-cont' style={{fontSize: '12rem', marginTop: '10%', color: 'white'}}/>  
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
          <BotaoLogOut />
        </div>
          
      </div>
    </div>
  )
}
