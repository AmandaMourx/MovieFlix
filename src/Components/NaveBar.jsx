import { Fragment, React } from "react";
import { Link, useNavigate} from "react-router-dom";
import "../Styles/NaveBar.css";
import Button from "@mui/material/Button";
import SearchAppBar from "./SearchBar";

export default function NaveBar() {
  const navigate = useNavigate();

  const changeUrlAction = () => {
    navigate('/MoviesAction');
    
  }

  const changeUrlHorror = () => {
    navigate('/MoviesHorror')
  }

  const changeUrlComedy = () => {
    navigate('/MoviesComedy')
  }

  const changeUrlLogin = () => {
    navigate('/login')
  }
  
  return (
    <Fragment>
      <nav>
        <Link to='/' style={{ color: '#fffff'}}>
          <div className="main_name">MovieFlix</div>
        </Link>
        <div className="links">
          <ul className="categories">
            <li style={{ color: "#fff", marginRight: '20%', textDecoration: 'none'}} onClick={changeUrlAction}>Ação</li>
            <li style={{ color: '#fff', marginRight: '20%', textDecoration: 'none'}} onClick={changeUrlHorror}>Terror</li>
            <li style={{ color: '#fff', marginRight: '20%', textDecoration: 'none'}} onClick={changeUrlComedy}>Comédia</li>
          </ul>
        </div>
        <div className="search">
          <SearchAppBar />
        </div>
        <Button
        className="login_button"
        onClick={changeUrlLogin}
        style={{
          borderWidth: "3px",
          borderColor: "white",
          color: "white",
          fontWeight: "bold",
          fontSize: "17px",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: '0%',
          textDecoration: "none",
        }}
        variant="outlined"
      >
        LOGIN
      </Button>
      </nav>
    </Fragment>
  );
}
