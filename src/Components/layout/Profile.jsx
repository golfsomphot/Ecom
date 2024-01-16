import React, { useRef, useState } from "react";
import imageUrl1 from "../../Assets/bg.jpeg";
import marlene from "../../Assets/pexels-marlene-leppänen-1183266.jpg"
import Harder from "./Harder";

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
      <div className="r" >
        <div className="container">
          <div className="row" style={{ height: "100vh" }}>
            <div className="col-6 r">
              <img
              style={{ borderRadius: "2%", cursor: "pointer" }} 
              src={marlene} alt="" />
            </div>
            <div className="col-6">
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
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Harder />
      <div className="pic">
        <Pic />
      </div>
    </div>
  );
}

export default Profile;
