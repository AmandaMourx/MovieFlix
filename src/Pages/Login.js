import React,  {useState} from 'react';
import { Link, , /*useNavigate*/ } from 'react-router-dom';
//import useAuth from "../hooks/useAuth";
import '../Styles/Login.css'


const Login = () => {
  
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  
  const submit = (e) =>{
      e.preventDefault();
      console.log(email);
  }
  
  //trying to implement the user authentication
  
  /*
    const signin= useAuth();
    const navigate = useNavigate();

    const handleSignin = () => {
    if(!email | !senha){
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };
    
  */
  
  return (
    <div className='login--page'>
      
      <div className='login--container'>
          <h2 className='title'>Entrar</h2>
          <form onSubmit={submit}>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='login--input' 
            type="email"
            placeholder="Digite seu E-mail" 
            id="email" email="email" ></input>
          <input 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='login--input' 
            type="password"
            placeholder="Digite sua senha"
            id="senha" senha="senha"
            ></input>
          </form>
          <button className='login--button login--enter' onClick={submit}>Entrar</button>
          <div className="divider">
          <hr />
          <span> </span>
          <h1>Não tem conta?</h1>
          <span> </span>
          <hr />
          </div>
          <Link to="/cadastro"><button className='login--button login--new' >Criar nova conta</button></Link>
      </div>

    </div>

  )
}

export default Login;
