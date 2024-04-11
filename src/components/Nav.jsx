import { Link } from "react-router-dom";
import Logo from "../assets/LogoPng.svg";
import "../css/style.css";

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
       
        </nav>
      </header>
    </>
  );
}

export default Nav;
