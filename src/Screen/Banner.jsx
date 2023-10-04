import React from "react";

const Banner = () => {
  const API = "http://www.website.draggital.in/api";
  return (
    <>
      <div className="container1">
        <img
          className="img-fluid imgBaner"
          src={`${API}/get-about-image?name=image1`}
          alt="blog slide"
        />
        <h4 class="centered">Draggital Careers</h4>
      </div>
    </>
  );
};

export default Banner;
