import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import { Form as BootstrapForm, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faCartShopping, faLanguage } from '@fortawesome/free-solid-svg-icons';



import Dropdown from 'react-bootstrap/Dropdown';


import Logo from '../../Assets/log.png'
import { Col, Row } from "react-bootstrap";
const Harder = () => {
  return (
    <>


      <Navbar expand="xl" className="bg-body-tertiary" bg="light" data-bs-theme="light"  >
        <Container fluid  >

          <Navbar.Collapse id="navbarScroll" className="row" >
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Col xl={1} md={12} xs={12}>
              <Nav>
                <img src={Logo} alt="" style={{ width: '5vw', height: '10vh', borderRadius: '50%' }} className="imglogo mx-auto" />
              </Nav>
            </Col>

            <Col xl={7} md={12} xs={12} className="text-center" >

              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="Homepage">Homepage</Nav.Link>
                <Nav.Link href="/">Product</Nav.Link>
                <Nav.Link href="Newsletter">Newsletter</Nav.Link>
                <Nav.Link href="Coupons">Coupons</Nav.Link>

                <Nav.Link href="Checkoutpage">Checkoutpage</Nav.Link>
                <Nav.Link href="Orderconfirm">Orderconfirm</Nav.Link>
                <Nav.Link href="Tracking">Tracking</Nav.Link>
                <Nav.Link href="Profile">Profile</Nav.Link>
                <Nav.Link href="Help">Help</Nav.Link>
              </Nav>
            </Col>



          </Navbar.Collapse>

          <Col xl={4} md={12} xs={12}  >
            <Form className="d-flex  ">

              <Button style={{ marginRight: '3%' }} href="Login" variant="outline-secondary">
                <FontAwesomeIcon icon={faUser} style={{ fontSize: '0.7em', textAlign: 'center', marginBottom: '0.3vh' }} />
                เข้าสู่ระบบ
              </Button>

              <Button style={{ marginRight: '3%' }} href="Favorites" variant="outline-secondary" >
                <FontAwesomeIcon icon={faHeart} style={{ fontSize: '0.7em' }} />
                รายการโปรด
              </Button>
              <Button style={{ marginRight: '3%' }} href="Cartpage" variant="outline-secondary"  >
                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '0.7em' }} />
                กระเป๋าช็อปปิ้ง
              </Button>
              {/* 
                <Dropdown style={{ width: '3vw' }}>


                  <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    <FontAwesomeIcon icon={faLanguage} style={{ fontSize: '0.7em' }} />

                  </Dropdown.Toggle>

                  <Dropdown.Menu   >
                    <Dropdown.Item href="#/">ไทย</Dropdown.Item>
                    <Dropdown.Item href="#/">English</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown> */}
              <Button variant="outline-secondary" style={{ width: '3vw' }}>
                <FontAwesomeIcon icon={faLanguage} style={{ fontSize: '0.7em' }} />

              </Button>


            </Form>


          </Col>
        </Container>
      </Navbar >


    </>
  );
};

export default Harder;
