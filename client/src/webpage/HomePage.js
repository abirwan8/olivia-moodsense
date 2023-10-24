import "bootstrap/dist/css/bootstrap.min.css";
import "../components/BottomNavbar.css";
import "../components/home/HomeStyle.css";
import "./camera/Camera.css";
import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Import Components
import TopBar from "../components/TopBar1";
import BottomNavbar from "../components/home/BottomNavbar_Home";

// Import Assets
import Swipe1 from "../components/home/img/swipe_scanmood.png"; //swipe page 1
import Swipe2 from "../components/home/img/swipe_orchoose.png"; //swipe page 2
import Moodsense from "../components/home/img/logo-bg-kuning.png";

// Import Asset Moods
import Angry from "../components/home/icon-mood/Icon-Angry.svg";
import Disgust from "../components/home/icon-mood/Icon-Disgust.svg";
import Fear from "../components/home/icon-mood/Icon-Fear.svg";
import Happy from "../components/home/icon-mood/Icon-Happy.svg";
import Neutral from "../components/home/icon-mood/Icon-Neutral.svg";
import Sad from "../components/home/icon-mood/Icon-Sad.svg";
import Surprised from "../components/home/icon-mood/Icon-Surprised.svg";

const Home = () => {
  const appRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const appElement = appRef.current;

    const handleScroll = () => {
      const scrollPosition = appElement.scrollTop;
      const sectionHeight = appElement.clientHeight;

      const activeSection = Math.round(scrollPosition / sectionHeight);
      setActiveSection(activeSection);
    };

    appElement.addEventListener("scroll", handleScroll);

    return () => {
      appElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeSection === 1 || activeSection === 2) {
      document.querySelectorAll(".dot-indicator .dot").forEach((dot) => {
        dot.style.backgroundColor = "rgba(249, 226, 75, .5)";
      });
      document.querySelector(".dot-indicator .dot.active").style.backgroundColor = "rgba(249, 226, 75, 1)";
    } else {
      document.querySelectorAll(".dot-indicator .dot").forEach((dot) => {
        dot.style.backgroundColor = "rgba(253, 246, 236, .5)";
      });
      document.querySelector(".dot-indicator .dot.active").style.backgroundColor = "rgba(253, 246, 236, 1)";
    }
  }, [activeSection]);

  const handleDotClick = (index) => {
    const scrollTo = index * appRef.current.clientHeight;
    appRef.current.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  };

  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div className="fullpage" ref={appRef}>
        {/* First Section */}
        <div className="section section-1">
          <TopBar />
          <Row className="textcover">
            <p className="whitetext fw-bold">Hi!, Welcome to</p>
            <img className="logo-moodsense" src={Moodsense}></img>
            <p className="browntext">Give a creative touch in choosing your dishes!</p>
          </Row>
          <div className="swipeup">
            <img src={Swipe1} />
          </div>
        </div>

        {/* Second Section */}
        <div className="section section-2" style={SectionStyle}>
          <div>
            <center>
              <p className="brownbody">What do you want to eat?</p>
              <p className="yellowheading">SCAN YOUR MOOD!</p>
              <Link to="camera">
                <Button className="scan-btn fw-bold">SCAN ME!</Button>
              </Link>
            </center>
          </div>
          <div className="swipeup2">
            <img src={Swipe2} />
          </div>
        </div>

        {/* Third Section */}
        <div className="section section-3" style={SectionStyle}>
          <Row style={{ marginTop: "-75px" }}>
            <p className="brownbody gb-24">What do you want to eat?</p>
            <p className="yellowheading yh-24">Choose your mood!</p>

            <Container fluid className="mood-chooser">
              <Row>
                <Col xs={2} sm={3} md={2} className="d-flex justify-content-center">
                  <a href="happy" className="text-center">
                    <img src={Happy}></img>
                    <p className="epilogue-body">Happy</p>
                  </a>
                </Col>
                <Col xs={2} sm={3} md={2} className="d-flex justify-content-center">
                  <a href="angry" className="text-center">
                    <img src={Angry}></img>
                    <p className="epilogue-body">Angry</p>
                  </a>
                </Col>
                <Col xs={2} sm={3} md={2} className="d-flex justify-content-center">
                  <a href="fear" className="text-center">
                    <img src={Fear}></img>
                    <p className="epilogue-body">Fear</p>
                  </a>
                </Col>
                <Col xs={2} sm={3} md={2} className="d-flex justify-content-center">
                  <a href="sad" className="text-center">
                    <img src={Sad}></img>
                    <p className="epilogue-body">Sad</p>
                  </a>
                </Col>
                <Col md={4}></Col>
                <Col xs={2} sm={3} md={2} className="d-flex justify-content-center">
                  <a href="disgust" className="text-center">
                    <img src={Disgust}></img>
                    <p className="epilogue-body">Disgust</p>
                  </a>
                </Col>
                <Col xs={2} sm={3} md={2} className="d-flex justify-content-center">
                  <a href="surprise" className="text-center">
                    <img src={Surprised}></img>
                    <p className="epilogue-body">Surprised</p>
                  </a>
                </Col>
                <Col xs={2} sm={3} md={2} className="d-flex justify-content-center">
                  <a href="neutral" className="text-center">
                    <img src={Neutral}></img>
                    <p className="epilogue-body">Neutral</p>
                  </a>
                </Col>
              </Row>
            </Container>
          </Row>
        </div>
        <BottomNavbar />
        <div className="dot-indicator">
          <div className={`dot ${activeSection === 0 ? "active" : ""}`} onClick={() => handleDotClick(0)}></div>
          <div className={`dot ${activeSection === 1 ? "active" : ""}`} onClick={() => handleDotClick(1)}></div>
          <div className={`dot ${activeSection === 2 ? "active" : ""}`} onClick={() => handleDotClick(2)}></div>
        </div>
      </div>
    </>
  );
};

export default Home;