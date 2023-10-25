import { Container } from 'react-bootstrap';

import home from './icons/home-neutral.svg';
import scanneutral from './icons/scan-neutral.svg';
import catalogue from './icons/catalogue-neutral.svg';

const BottomNavbarNeutral = () => {
    return(
        <Container>
        <nav className="nav fixed-bottom">
            <span className="nav-indicator"></span>
            <a href="/home" className="nav__link">
                <img className="nav__icon" alt="nav-home" src={ home }/>
                <span className="nav__text">Home</span>
            </a>
            <a href="/camera" className="nav__link ps-3 pb-3">
                <img className="nav__icon icon-scan" alt="nav-teagreen" src={ scanneutral }/>
                <span className="nav__text" style={{ marginLeft: "8px" }}>Scan Me!</span>
            </a>
            <a href="/catalogue" className="nav__link">
                <img className="nav__icon" alt="alt-catalogue" src={ catalogue }/>
                <span className="nav__text">Catalogue</span>
            </a>
        </nav>
        <div className="half-circle"></div>
        </Container>
    );
}

export default BottomNavbarNeutral;