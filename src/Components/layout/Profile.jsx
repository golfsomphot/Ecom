import React, { useRef, useState } from "react";
import imageUrl1 from "../../Assets/bg.jpeg";

import Harder from "./Harder";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Profile() {
  const [Imagechange, setImagechange] = useState(imageUrl1);
  const Pic = () => {
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
      fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];

      if (file) {
        // อ่าน URL ของรูปจากไฟล์ที่เลือก
        const imageUrl = URL.createObjectURL(file);
        setImagechange(imageUrl);
        console.log("Imagechange", Imagechange);
      }
    };


    return (
      
      <Container>
        <Row style={{ height: "100vh" }}>


          <Col xl={12} md={6}>
            <img
              src={Imagechange}
              alt=""
              style={{ borderRadius: "2%", cursor: "pointer" }}
              onClick={handleImageClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </Col>
        </Row>
      </Container>
    );



  };

  return (
    <div>
      <Harder />
      <Pic />
    </div>
  );
}

export default Profile;
