import "../css/footer.css";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import x from '../assets/icons/x.svg';

function Footer() {
  return (
    <>
      <footer className="rodape">
        <div className="rodape__textos">
          <div className="rodape__textos__somos">
            <h1>QUEM SOMOS</h1>
            <p>
              Cyrax Devs Code é uma empresa inovadora especializada em
              desenvolvimento de software. Nos orgulhamos de oferecer uma ampla
              variedade de códigos JavaScript, plugins de loja online e scripts
              personalizados para atender às suas necessidades. Estamos
              comprometidos em fornecer soluções de alta qualidade que
              impulsionam o seu negócio. Junte-se a nós na jornada para moldar o
              futuro da tecnologia.
            </p>

            <div className="rodape__textos__icones">
              <ul>
                <a href="">
                  <img src={facebook} alt="" className="rodape__textos__icones__icone"/>
                </a>
                <a href="">
                  <img src={instagram} alt="" className="rodape__textos__icones__icone"/>
                </a>
                <a href="">
                  <img src={linkedin} alt="" className="rodape__textos__icones__icone"/>
                </a>
                <a href="">
                  <img src={x} alt="" className="rodape__textos__icones__icone x"/>
                </a>
              </ul>
            </div>
          </div>
         
          <div className="rodape__textos__contato">
            <h1>CONTATE-NOS</h1>

            <p>
              Você tem perguntas ou sugtestões? <br />
              <b>Cyrax@Devs.Code</b>
            </p>

            <p>
              Você precisa de suporte? Ligue para nós. <br /> +55 (11)
              93690-6669
            </p>
          </div>
        </div>

        <div className="rodape__copyright">
          <p>@ Copyright 2024 Cyrax Devs Code. All right reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
