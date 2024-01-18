import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import axios from "axios";

import Imgformlogin from "../../Assets/pexels-moose-photos-1038000.jpg"

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Harder from "./Harder";
import Label from "react-bootstrap/FormLabel"
import { Link } from 'react-router-dom';
const Login = () => {
  const [usname, setNameu] = useState("");
  const [password, setPw] = useState("");

  const [id, setId] = useState(false)
  const [logform, setlogform] = useState(true)


  const history = useNavigate();

  const activeUser = {
    usname,
    password,
  };

  const Btnregiter = () => {

    setId(!id);
    setlogform(!logform);
    return
  }



  const Btn_profile = async (event) => {
    try {
      event.preventDefault();
      let rowdata = await fetchData(activeUser);

      if (rowdata !== undefined) {
        console.log("rowdata", rowdata);
        history("/");
      }
    } catch (error) {
      console.log("error", error);
    }

    // setNameu("");
    // setPw(0);
  };

  async function fetchData(activeUser) {
    try {
      const response = await axios
        .post("http://localhost:8000/loginpages", activeUser)
        .then();
      if (response.data === "002") {
        alert("Username is not valid");
      } else if (response.data === "003") {
        alert("Password is not valid ");
      } else {
        console.log("Response:", response.data);
        return response.data;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const Userchang = (event) => {
    setNameu(event.target.value);
  };
  const Passchang = (event) => {
    setPw(event.target.value);
  };

  return (
    <>
      <Harder />
      <Container fluid>
        <Container   >
          <Row style={{ marginTop: '10vh' }} >
            <Col xl={6}>
              <img src={Imgformlogin} alt="" width={'100%'} />
            </Col>


            <Col xl={6} style={{ padding: '0px' }}    >

              <div style={{ backgroundColor: 'whitesmoke', borderRadius: '10px', display: 'flex', justifyContent: 'center' }} width={'100%'}  >

                <Form onSubmit={Btn_profile}  >

                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
                    {logform && <h2>เข้าสู่ระบบ</h2>}
                    {id && <h2>สมัครสมาชิก</h2>}

                    <Form.Label column sm="2">
                      Username
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="text"
                        value={usname}
                        placeholder="Username"
                        onChange={Userchang}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="2">
                      Password
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={Passchang}
                      />
                    </Col>
                  </Form.Group>

                  {/* #regiter  */}
                  {id &&
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          value={password}
                          placeholder="Email"
                          onChange={Passchang}
                        />
                      </Col>


                      <Form.Label column sm="2">
                        password
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          value={password}
                          placeholder="password"
                          onChange={Passchang}
                        />
                      </Col>
                      <Form.Label column sm="2">
                        confirmPassword
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          value={password}
                          placeholder="confirmPassword"
                          onChange={Passchang}
                        />
                      </Col>

                    </Form.Group>

                  }

                  <Link onClick={Btnregiter} >สมัครสมาชิก</Link>
                  <div className="from-control" style={{ marginTop: '5vh' }}>
                    <Button variant="success" type="submit">
                      Submit
                    </Button>
                    {""}
                  </div>
                </Form>
              </div>


            </Col>
          </Row>
        </Container>

      </Container>
    </>
  );
};

export default Login;
