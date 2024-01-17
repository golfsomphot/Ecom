import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Form as BootstrapForm, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping, faSearch, faLanguage } from '@fortawesome/free-solid-svg-icons';



import Dropdown from 'react-bootstrap/Dropdown';


import Logo from '../../Assets/log.png'
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
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: '0.7em', textAlign: 'center',marginBottom:'0.3vh' }} />
                  LOGIN
                </Button>

                <Button style={{ marginRight: '5%' }} href="" variant="outline-secondary" >
                  <FontAwesomeIcon icon={faHeart} style={{ fontSize: '0.7em' }} />
                  รายการโปรด
                </Button>
                <Button style={{ marginRight: '5%' }} href="" variant="outline-secondary" >
                  <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '0.7em' }} />
                  กระเป๋าช็อปปิ้ง
                </Button>

                <Dropdown style={{ width: '3vw' }}>

                  <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    <FontAwesomeIcon icon={faLanguage} style={{ fontSize: '0.8em' }} />

                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">ไทย</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">English</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </Form>
            </Col>

          </Navbar.Collapse>

        </Container>
      </Navbar >
      <Row>
        <Col xl={8}>

        </Col>


        <Col xl={4} className="d-flax">
          <InputGroup className="mb-3">
            <InputGroup.Text style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

          </InputGroup>


        </Col>
      </Row>



    </>
  );
};

export default Harder;
