import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Harder from "./Harder";
import Label from "react-bootstrap/FormLabel"
const Login = () => {
  const [usname, setNameu] = useState("");
  const [password, setPw] = useState("");

  const history = useNavigate();

  const activeUser = {
    usname,
    password,
  };

  



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
      <Container fluid>
        <Harder />
        <div style={{width:'50%',backgroundColor:'whitesmoke'}} className="mx-auto text-center">
        <Form onSubmit={Btn_profile} >
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
            <Label>เข้าสู่ระบบ</Label>
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                value={usname}
                placeholder="Email"
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

          <div className="from-control">
            <Button variant="success" type="submit">
              Success
            </Button>
            {""}
          </div>
        </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
