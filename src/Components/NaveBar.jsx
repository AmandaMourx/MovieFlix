import { Fragment, React } from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
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
            <Link to='Movies_Action' style={{ color: "#fff", marginRight: '20%', textDecoration: 'none'}}><li>Ação</li></Link>
            <Link to='Movies_Horror' style={{ color: '#fff', marginRight: '20%', textDecoration: 'none'}}><li>Terror</li></Link>
            <Link to='Movies_Comedy' style={{ color: '#fff', marginRight: '20%', textDecoration: 'none'}}><li>Comédia</li></Link>
          </ul>
        </div>
        <div className="search">
          <SearchAppBar />
        </div>
        <Link to="Login"><Button
        className="login_button"
        style={{
          borderWidth: "3px",
          borderColor: "white",
          color: "white",
          fontWeight: "bold",
          fontSize: "17px",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="outlined"
      >
        LOGIN
      </Button></Link>
      <Routes>
        <Route path="Login" component={Login}></Route>
      </Routes>
      </nav>
    </Fragment>
  );
}
