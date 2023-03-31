import { APIKey } from "../config/Key";
import React, {createContext, useState} from "react";

export const Autentificacao = createContext({});

export const RealizarAutentific = ({children}) =>{
    const [infoUsuario,setInfousuario] = useState([]);
    const [logged,setLogged] = useState(false);

    function criarToken(){

    }

    function Sessao(){

    }

    function criarSessao(){

    }

    function getInfoUsuario(){

    }
    
    return <Autentificacao.Provider value={{infoUsuario,logged,criarToken,Sessao,criarSessao}}>{children}</Autentificacao.Provider>
}
