import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          We are a dedicated team committed to revolutionizing healthcare in 2024. Leveraging advanced technologies and compassionate care, we strive to provide seamless, patient-centric solutions.
          </p>
          <p>
          Our work centers on building innovative tools to enhance healthcare delivery, accessibility, and outcomes. From designing user-friendly platforms to implementing cutting-edge medical solutions, we focus on improving lives every step of the way.
          </p>
          <p>At the heart of our mission is a deep belief in the power of technology to transform healthcare.</p>
          <p>Together, we are building a healthier, brighter future for all.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;

