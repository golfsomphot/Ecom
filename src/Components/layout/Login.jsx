import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

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
        history("Profile");
        
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
    <div className="login">
      <form onSubmit={Btn_profile}>
        <div className="from-control">
          <label> เข้าสู่ระบบ</label>
        </div>
        <div
          className="from-control"
          style={{ paddingLeft: "5%", paddingRight: "5%" }}
        >
          <input type="text" onChange={Userchang} />
          <label> Username</label>
        </div>
        <div
          className="from-control"
          style={{ paddingLeft: "5%", paddingRight: "5%" }}
        >
          <input type="password" onChange={Passchang} />
          <label> Password</label>
        </div>
        <div className="from-control">
          <Button variant="success" type="submit">
            Success
          </Button>{""}
        </div>
      </form>
    </div>
  );
};

export default Login;
