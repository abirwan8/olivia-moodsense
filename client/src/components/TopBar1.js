import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./TopBar.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Figure from "react-bootstrap/Figure";

import logomoodsense from "./assets/logo-bg-putih.png";

const TopBar1 = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid>
        <Row className="pt-3">
          <Col xs={10} md={11}>
          </Col>

          <Col xs={2} md={1}>
            <a href="#" onClick={handleShow}>
              <i className="bi bi-list fs-3 float-end text-light res-topbar_right"></i>
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
        <TopBar1 key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default SideBar;
