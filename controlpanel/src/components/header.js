import '../css/header.css'

const Header = () => {
    return (
        <div className="container">
            
            <div className="logo"></div>
            <div className="title">CONTROL PANEL | </div>
            <a className="button" href="/home">HOME</a>
            
            <a className="button" href="/scripts">SCRIPTS</a>


        </div>
    )
}

export default Header;