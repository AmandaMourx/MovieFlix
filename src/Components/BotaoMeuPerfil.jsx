import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BotaoMeuPerfil() {
  const navigate = useNavigate();

  const changeUrlMeuPerfil = () => {
    navigate('/meu-perfil');
  };

  return (
    <>
      <Button
        style={{
          borderWidth: "3px",
          borderColor: "white",
          color: "white",
          fontWeight: "bold",
          fontSize: "10px",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "7%",
          marginRight: "0%",
          textDecoration: "none",
          marginTop: "1%",
          marginBottom: "1%",
          padding: "10px",
          textAlign: 'center',
        }}
        variant="outlined"
        onClick={changeUrlMeuPerfil}
      >
        {" "}
        MEU PERFIL{" "}
      </Button>
    </>
  );
}
