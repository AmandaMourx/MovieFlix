import React,  {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'


const Login =  (props) => {
  
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  
  const submit = (e) =>{
      e.preventDefault();
      console.log(email);
  }
  return (
    <div className='login--page'>
      
      <div className='login--container'>
          <h2>Entrar</h2>
          <form onSubmit={submit}>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='login--input' 
            type="text" placeholder='E-mail' 
            id="email" email="email" ></input>
          <input 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='login--input' 
            type="password" placeholder='Senha' 
            id="senha" senha="senha"
            ></input>
          </form>
          <button className='login--button login--enter' onClick={submit}>Entrar</button>
            <h3>Ou</h3>
          <Link to="/cadastro"><button className='login--button login--new' >Criar nova conta</button></Link>
      </div>

    </div>

  )
}

export default Login;
