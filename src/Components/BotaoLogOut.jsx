import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function BotaoLogOut() {
  const navigate = useNavigate();

  const changeUrlAreaLivre = ()=>{
    navigate('/')
  }

  return (
    <>
      <Button
        style={{
          borderWidth: "3px",
          borderColor: "white",
          color: "white",
          fontWeight: "bold",
          fontSize: "17px",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "83%",
          textDecoration: "none",
          marginTop: "35%",
          marginBottom: "3%",
        }}
        variant="outlined"
        onClick={changeUrlAreaLivre}
      >
        {" "}
         LOGOUT{" "}
      </Button>
    </>
  );
}
