import useContext from "react";
import Autentificacao from "../contexts/Auth";

const useAuth = () =>{
    const contexto = useContext(Autentificacao);

    return contexto;
}
export default useAuth;