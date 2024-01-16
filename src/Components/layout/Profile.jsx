import React, { useRef, useState } from "react";
import imageUrl1 from "../../Assets/images.jpeg"
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
        console.log("Imagechange",Imagechange)
      }
    };

    return (
      <div>
        <img
          src={Imagechange}
          alt=""
          style={{ padding: "50px", borderRadius: "50%", cursor: "pointer" }}
          onClick={handleImageClick}
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    );
  };

  return (
    <div>
      <Harder />
      <div className="pic">
        <Pic/>
      </div>
    </div> 
  );
}

export default Profile;
