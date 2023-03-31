import { Fragment, React } from "react";
import { Link, useNavigate} from "react-router-dom";
import "../Styles/NaveBar.css";
import SearchAppBar from "./SearchBar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
              <li style={{ color: '#fff', marginRight: '20%', textDecoration: 'none'}} onClick={changeUrlComedy}>Listas</li>
            </ul>
          </div>

          <div className="principal">
          <div className="search">
            <SearchAppBar />
            
          </div>

        <AccountCircleIcon className="login---button" fontSize="large"/>

      </div>
      </nav>
    </Fragment>
  );
}
