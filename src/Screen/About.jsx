import React from "react";
import AboutService from "./AboutService";
import Futtor from "../Component/Futtor";
import Banner from "./Banner";

function About() {
  const API = "https://draggital-backend.herokuapp.com/api";

  return (
    <>
      <div className="container-fluid1">
        <div className="">
          <div className="container1">
            <img
              className="img-fluid imgBaner"
              src={`${API}/get-about-image?name=image1`}
              alt="blog slide"
            />
            <h4 class="centered">Draggital About</h4>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-center"> About Us</h1>
      </div>
      <AboutService />

      <div className="my-5"></div>

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
      <Futtor />
    </>
  );
}

export default About;
