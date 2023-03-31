import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function BotaoLogOut() {
  const navigate = useNavigate();

  const { signout } = useAuth(); 

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
          marginLeft: "3%",
          textDecoration: "none",
          marginTop: "2%",
          marginBottom: "3%",
        }}
        variant="outlined"
        onClick={() => [signout, navigate('/login')]}
      >
        {" "}
         LOGOUT{" "}
      </Button>
    </>
  );
}
