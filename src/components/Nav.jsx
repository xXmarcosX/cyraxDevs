import Logo from '../assets/LogoPng.svg'

function Nav(){
    return(
        <>
        <header>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="logo cyrax" />
                </div>
            </nav>
        </header>
        </>
    )
}

export default Nav