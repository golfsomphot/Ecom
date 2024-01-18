import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Imgcade from "../../Assets/pexels-alena-shekhovtcova-7036557.jpg";
import Imgcade1 from "../../Assets/pexels-alena-shekhovtcova-7036540.jpg";
import Imgcade2 from "../../Assets/pexels-alena-shekhovtcova-7036552.jpg";
import Imgcade3 from "../../Assets/woman-8332162_1280.jpg";

import Container from 'react-bootstrap/Container';
import Harder from "./Harder";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import Form from "react-bootstrap/Form";

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form as BootstrapForm, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = () => {
  return (
    <>
      <Harder />
      <Container>
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





        <Row>
          <Col xl={3} md={6} xs={12}>
            <Card
              style={{ width: "18rem", margin: "10px" }}
              className="mx-auto text-center"
            >
              <img src={Imgcade} alt="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={3} md={6} xs={12}>
            <Card
              style={{ width: "18rem", margin: "10px" }}
              className="mx-auto text-center"
            >
              <img src={Imgcade1} alt="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={3} md={6} xs={12}>
            <Card
              style={{ width: "18rem", margin: "10px" }}
              className="mx-auto text-center"
            >
              <img src={Imgcade2} alt="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6} xs={12}>
            <Card
              style={{ width: "18rem", margin: "10px" }}
              className="mx-auto text-center"
            >
              <img src={Imgcade3} alt="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>
    </>
  );
};

export default Product;
