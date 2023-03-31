import { useContext } from "react";
import { AuthContext } from "../context/Auth";

const useAuth = () =>{
    const contexto = useContext(Autentificacao);

    return contexto;
}
export default useAuth;
