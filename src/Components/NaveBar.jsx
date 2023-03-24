import { React } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./NaveBar.css";
import Button from "@mui/material/Button";
import SearchAppBar from './SearchBar';
import Login from '../Pages/Login';

export default function NaveBar() {
  return (
    <nav>
      <div className="main_name">MovieFlix</div>
      <div class="links">
        <ul class="categories">
          <li>Ação</li>
          <li>Terror</li>
          <li>Comédia</li>
        </ul>
      </div>
      <div className="search">
          <SearchAppBar/>
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
  );
}
