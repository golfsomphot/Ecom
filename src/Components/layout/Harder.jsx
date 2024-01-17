import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Logo from '../../Assets/log.jpg'
const Harder = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
        <Container fluid  >


          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">



            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/Harder">Home</Nav.Link>
              <Nav.Link href="Product">Product</Nav.Link>
              <Nav.Link href="/Profile">Profile</Nav.Link>


            </Nav>


            <Nav>
              <img src={Logo} alt="" style={{ width: '5vw', height: '10vh' }} className="imglogo" />
            </Nav>



            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ marginRight: '5%' }} className="btnSearch" variant="outline-success">
                Search
              </Button>
              <Button style={{ marginRight: '5%' }} href="Login" className="btnSearch" variant="outline-danger">
                login
              </Button>
            </Form>


          </Navbar.Collapse>

        </Container>
      </Navbar >
    </>
  );
};

export default Harder;
