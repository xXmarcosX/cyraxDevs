import Balls from "../assets/sobre/balls.png"
import Office from '../assets/sobre/office.png'

import '../css/sobre.css'

function Sobre(){
    return (
        <>
        <div className="background">
            <div className="background__container">
                <div className="background__container__img">
                    <img src={Balls} alt="" />
                </div>
                <div className="background__container__content">
                    <h1>sobre nós</h1>
                    <div className="background__container__content__line"></div>
                    <div className="background__container__descricao">
                        <p><strong>descricao</strong></p>
                        <p className='background__container__descricao__p2'>Especialistas em Desenvolvimento de Software. Soluções inovadoras para o seu negócio</p>
                    </div>
                </div>
            </div>
            <img src={Office} alt="" className="background__img" />
        </div>
        </>
    )
}

export default Sobre