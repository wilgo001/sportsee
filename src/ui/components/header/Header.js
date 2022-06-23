import "./Header.css";
import logo from '../../../assets/logo.png';

function Header(props) {
    return(
        <div className="header container">
            <img src={logo} alt="logo-sportsee" className="header logo"/>
            <nav className="header navigation">
                <p>Accueil</p>
                <p>Profil</p>
                <p>Réglage</p>
                <p>Communauté</p>
            </nav>
        </div>
    )
}

export default Header;