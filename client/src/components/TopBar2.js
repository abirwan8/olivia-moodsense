import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./TopBar.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Figure from "react-bootstrap/Figure";
import { useNavigate } from 'react-router-dom';

import logomoodsense from "./assets/logo-bg-putih.png";

const TopBar2 = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={1}>
            <a>
              <i onClick={() => navigate(-1)} className="bi bi-arrow-left fs-3 text-dark res-topbar_left"></i>
            </a>
          </Col>

          <Col xs={8} md={10}>
            <InputGroup>
              <InputGroup.Text className="search__bar search__left">
                <i className="bi bi-search fs-6 text-secondary"></i>
              </InputGroup.Text>
              <Form.Control placeholder="Search Tea/Mood" type="search" className="search__bar search__center" />
              <InputGroup.Text className="search__bar search__right">
                <i className="bi bi-filter-left fs-4"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>

          <Col xs={2} md={1}>
            <a onClick={handleShow}>
              <i className="bi bi-list fs-3 float-end mt-1 res-topbar_right"></i>
            </a>
          </Col>
        </Row>
      </Container>

      <Offcanvas className="side" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Figure className="d-flex justify-content-center">
            <Figure.Image width={180} alt="171x180" src={logomoodsense} />
          </Figure>
          <a href="/login-page">
            <div className="d-flex justify-content-center">
              <button className="btn btn-login">Sign in</button>
            </div>
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function SideBar() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <TopBar2 key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default SideBar;
