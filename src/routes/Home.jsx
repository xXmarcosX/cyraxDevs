import '../css/home.css'

import JsIcon from '../assets/icons/jsIcon.svg';
import PhpIcon from '../assets/icons/phpIcon.svg';
import HtmlIcon from '../assets/icons/htmlIcon.svg';
import FlutterIcon from '../assets/icons/flutterIcon.svg';
import AspIcon from '../assets/icons/aspIcons.svg';
import CssIcon from '../assets/icons/cssIcon.svg';

function Home(){
    return(
        <>
        <div className="container">
            <div className="container__languages javascript">
                <h2>JAVASCRIPT</h2>
                <div className="container__languages__img">
                    <img src={JsIcon} alt="" srcset="" />
                </div>
            </div>

            <div className="container__languages php">
                <h2>PHP</h2>
                <div className="container__languages__img">
                    <img src={PhpIcon} alt="" srcset="" className='icon_php'/>
                </div>
            </div>

            <div className="container__languages html">
                <h2>HTML</h2>
                <div className="container__languages__img">
                    <img src={HtmlIcon} alt="" srcset="" />
                </div>
            </div>

            <div className="container__languages flutter">
                <h2>Flutter</h2>
                <div className="container__languages__img">
                    <img src={FlutterIcon} alt="" srcset="" />
                </div>
            </div>
            
            <div className="container__languages asp">
                <h2>ASP.NET</h2>
                <div className="container__languages__img">
                    <img src={AspIcon} alt="" srcset="" />
                </div>
            </div>
            

            <div className="container__languages css">
                <h2>CSS</h2>
                <div className="container__languages__img">
                    <img src={CssIcon} alt="" srcset="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home