import React, {useState} from 'react';
import '../Styles/Login.css';
import { Link, /*useNavigate*/ } from 'react-router-dom';
//import useAuth from "../hooks/useAuth";

const Cadastro = (props) => {
  
  /*
    const navigate = useNavigate();

    const {signup} = useAuth();

    const handleSignup = () => {
      if(!email | !emailConf | !senha){
        setError("Preencha todos os campos");
        return;
      }else if (email !== emailConf){
        setError("Os e-mails não são iguais");
        return;
      }

      const res = signup(email, senha);

      if(res){
        setError(res);
        return;
      }

      alert("Usuário cadastrado com sucesso!");
      navigate('/login');
    };
  */
  
  const [email,setEmail] = useState("");
  const [usuario,setUsuario] = useState("");
  const [senha,setSenha] = useState("");
  
  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='login--page'>
    <div className='login--container'>
        <h2 className='title'>Criar conta</h2>
        <form lassName="register-form" onSubmit={handleSignup}>
        <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='login--input' 
        type="email" placeholder='Digite seu E-mail'  
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
        type="password" placeholder='Digite sua senha' 
        id="senha" senha="senha" 
        ></input>
        <input className='login--input' type="password" placeholder='Confirme sua senha'></input>
      </form>
        <Link to="/login"><button className='login--button'>Criar conta</button></Link>
          <div className="divider">
            <hr />
              <span> </span>
              <h1>Já tem uma conta?</h1>
              <span> </span>
            <hr />
        </div>
        <Link to="/login">
          <button className="login--button login--new">Entrar</button>
        </Link>
    </div>
  </div>
  )
}

export default Cadastro;
