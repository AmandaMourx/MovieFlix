import React, {useState} from 'react'
import '../Styles/Login.css'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'

const Cadastro = (props) => {
  
  const [email,setEmail] = useState("");
  const [usuario,setUsuario] = useState("");
  const [senha,setSenha] = useState("");
  const navigate =useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email);
    navigate("/login");
  };

  return (
    <div className='login--page'>
    <div className='login--container'>
        <h2>Criar conta</h2>
        <form lassName="register-form" onSubmit={handleSignup}>
        <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='login--input' 
        type="text" placeholder='E-mail' 
        id="email" email="email" 
        ></input>
        
        <input
         value={usuario}
         onChange={(e) => setUsuario(e.target.value)}
         className='login--input' 
         type="text" placeholder='Nome de usuário' 
         id="usuario" usuario="usuario" 
         ></input>

        <input 
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className='login--input' 
        type="password" placeholder='Senha' 
        id="senha" senha="senha" 
        ></input>

        <input className='login--input' type="password" placeholder='Confirme sua senha'></input>
      </form>
        <Link to="/login"><button className='login--button'>Criar conta</button></Link>
    </div>
  </div>
  )
}

export default Cadastro;
