import Balls from '../assets/sobre/balls.png'
import Projeto from '../components/Projeto.jsx'

import '../css/projetos.css'

function Projetos(){
    return (
        <>
        <div className="projetos">
            <h1>Nossos Projetos</h1>
            <div className="projetos__container">
                <Projeto imagem={Balls} titulo='oda genio' descricao='muito bom'/>
                <Projeto/>
                <Projeto/>
                <Projeto/>
            </div>
        </div>
        </>
    )
}

export default Projetos