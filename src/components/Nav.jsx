import { Link } from "react-router-dom";
import Logo from "../assets/LogoPng.svg";
import Hamburguer from '../assets/hamburguer.svg'
import Pessoa from '../assets/pessoinha.svg'
import "../css/nav.css";

function Nav() {
  return (
    <>
      <header className="cabecalho">
        <nav className="navega">
         
          <div className="logo">
            <img src={Logo} alt="logo cyrax" className="logo"/>
          </div>
          
          <div className="links">
            <nav>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/sobre" className="link">
              Sobre
            </Link>
            <Link to="/paginas" className="link">
              Paginas
            </Link>
            </nav>
          </div>

          <div className="icons">
            <ul>
            <li><a href=""><img src={Pessoa} alt="" /></a></li>
            <li><a href=""><img src={Hamburguer} alt="" /></a></li>
            </ul>
          </div>
       
        </nav>
      </header>
    </>
  );
}

export default Nav;
