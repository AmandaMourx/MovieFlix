import { Fragment, React } from "react";
import { Link } from "react-router-dom";
import "../Styles/NaveBar.css";
import Button from "@mui/material/Button";
import SearchAppBar from "./SearchBar";

export default function NaveBar() {
  return (
    <Fragment>
      <nav fullwidth>
        <Link to='/' style={{ color: '#fffff'}}>
          <div className="main_name">MovieFlix</div>
        </Link>
        <div class="links">
          <ul class="categories">
            <Link to='MoviesAction' style={{ color: "#fff", marginRight: '20%', textDecoration: 'none'}}><li>Ação</li></Link>
            <Link to='MoviesHorror' style={{ color: '#fff', marginRight: '20%', textDecoration: 'none'}}><li>Terror</li></Link>
            <Link to='MoviesComedy' style={{ color: '#fff', marginRight: '20%', textDecoration: 'none'}}><li>Comédia</li></Link>
          </ul>
        </div>
        <div className="search">
          <SearchAppBar />
        </div>
        <Link to="login" style={{ textDecoration: "none" }}><Button
        className="login_button"
        style={{
          borderWidth: "3px",
          borderColor: "white",
          color: "white",
          fontWeight: "bold",
          fontSize: "17px",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: '0%'
        }}
        variant="outlined"
      >
        LOGIN
      </Button></Link>
      </nav>
    </Fragment>
  );
}
