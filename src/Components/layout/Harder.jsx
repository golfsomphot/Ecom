import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';



import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from '../../Assets/log.jpg'
import { Col, Row } from "react-bootstrap";
const Harder = () => {
  return (
    <>


      <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
        <Container fluid  >



          <Navbar.Collapse id="navbarScroll" className="row" >
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Col xl={4}>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/Harder">Home</Nav.Link>
                <Nav.Link href="Product">Product</Nav.Link>
                <Nav.Link href="/Profile">Profile</Nav.Link>
              </Nav>
            </Col>


            <Col xl={4} className="text-center" >
              <Nav>
                <img src={Logo} alt="" style={{ width: '5vw', height: '10vh', borderRadius: '50%' }} className="imglogo mx-auto" />
              </Nav>
            </Col>


            <Col xl={4}>
              <Form className="d-flex  ">

                <Button style={{ marginRight: '5%' }} href="Login" variant="outline-secondary">
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: '1em' }} />
                  LOGIN
                </Button>




                <NavDropdown title="Thai" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">ไทย</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">English</NavDropdown.Item>
                </NavDropdown>
                <Button style={{ marginRight: '5%' }} href="" variant="outline-secondary" >
                  <FontAwesomeIcon icon={faHeart} style={{ fontSize: '1em' }} />
                  รายการโปรด
                </Button>



              </Form>
            </Col>

          </Navbar.Collapse>

        </Container>
      </Navbar >
      <Row>
        <Col xl={8}>

        </Col>


        <Col xl={4}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Col>
      </Row>



    </>
  );
};

export default Harder;
