import React, { useState, useEffect } from "react";
import Futtor from "./Component/Futtor";
import Services from "./Screen/HomeServices";
import ImageSlider from "./Component/ImageSlider";
import OurClient from "./Component/OurClient";
import ProgressBar from "./Component/ProgressBar";
import AboutService from "./Screen/AboutService";

const Home = () => {
  return (
    <>
      <ImageSlider />

      {/* About */}
      <div className="my-5" id="about">
        <h1 className="text-center"> About Us</h1>
      </div>
      <AboutService />

      {/* About */}

      <div style={{ marginTop: 50, marginBottom: 0 }}>
        <ProgressBar />
      </div>
      <div style={{ marginTop: 50, marginBottom: 0 }} id="service">
        <Services />
      </div>
      {/* <div style={{marginTop: 20, marginBottom: 10}} >
<Work />      
    </div> */}
      <div style={{ marginTop: 20 }}>
        <OurClient />
      </div>
      <div class="suscribe-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs=12">
              <div class="suscribe-text text-center">
                <h3>Welcome to our Draggital Family</h3>
                <a class="sus-btn" href="/">
                  Get A Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Futtor />
      </div>
    </>
  );
};

export default Home;
