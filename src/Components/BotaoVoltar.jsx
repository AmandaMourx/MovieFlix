import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function BotaoVoltar() {
  const navigate = useNavigate();

  const changeUrlGoBack = () => {
    navigate(-1);
  };

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
          marginTop: "-5%",
          marginBottom: "5%",
        }}
        variant="outlined"
        onClick={changeUrlGoBack}
      >
        {" "}
        <ArrowBackIcon style={{ marginRight: "10%" }} /> VOLTAR{" "}
      </Button>
    </>
  );
}
