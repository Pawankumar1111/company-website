import React from "react";
import Futtor from "../Component/Futtor";


const Careers = () => {
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
      <div className="my-5"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form>
              <input type="text" name="name" placeholder="Enter Name" />
              <input type="text" name="name" placeholder="Your Email" />
              <input type="text" name="name" placeholder="Mobile Number" />
              <textarea
                name="text"
                id=""
                rows="5"
                placeholder="Message"
                className="input1"
              ></textarea>
              <div style={{ textAlign: "center", marginBottom: "7%" }}>
                <button className="btnform"> Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="suscribe-area" style={{ marginTop: 40 }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
              <div className="suscribe-text text-center">
                <h4>Get Best SEO Service</h4>
                <a aria-current="page" className="buttonWork sus-btn " href="/">
                  <span>Talk to our Experts</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Futtor />
    </>
  );
};

export default Careers;
