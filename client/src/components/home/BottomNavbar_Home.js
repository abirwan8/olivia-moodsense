import { Container } from "react-bootstrap";

import home from "./icon-green/home.svg";
import teagreen from "./icon-green/teanology_scan.svg";
import catalogue from "./icon-green/catalogue.svg";

const BottomNavbar = () => {
  return (
    <Container>
      <nav className="nav fixed-bottom">
        <span className="nav-indicator"></span>
        <a href="/home" className="nav__link">
          <img className="nav__icon" alt="nav-home" src={home} />
          <span className="nav__text">Home</span>
        </a>
        <a href="/camera" className="nav__link ps-3 pb-3">
          <img className="nav__icon icon-tea" alt="nav-teagreen" src={teagreen} />
          <span className="nav__text">Scan Me!</span>
        </a>
        <a href="/catalogue" className="nav__link">
          <img className="nav__icon" alt="nav-catalogue" src={catalogue} />
          <span className="nav__text">Catalogue</span>
        </a>
      </nav>
      <div className="half-circle"></div>
    </Container>
  );
};

export default BottomNavbar;
