import '../css/projeto.css'

function Projeto({imagem, titulo, descricao}){
    return(
        <>
        <div className="contain">
            <div className="contain__img">
                <img src={imagem} alt="" />
            </div>
            <div className="contain__content">
                <h4>{titulo}</h4>
                <p>{descricao}</p>
            </div>
            <div className="contain__buttons">
                <button>Repositorio</button>
                <button>Página</button>
            </div>
        </div>
        </>
    )
}

export default Projeto