import "./Header.css";
import logo from '../../../assets/logo.png';
import PropTypes from "prop-types";

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

Header.propTypes = {
    className: PropTypes.string
}

export default Header;