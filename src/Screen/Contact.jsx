import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Futtor from "../Component/Futtor";

const Contact = () => {
  const API = "http://draggitalserver-env.eba-mmgxmkyc.us-east-2.elasticbeanstalk.com/api";

     const getBanners=async ()=>{
         const result = await axios.get(`${API}/get-service`);
        console.log("hii");
         return result;
     }
     const [aboutList,setAboutList] = useState([]);

     useEffect(()=>{
          getBanners().then((about)=>{
           // console.log(banner.data[0]);
           const aboutdata = about.data.map(function (cimg) {
             return cimg;
           })
           //console.log(aboutdata[0].heading2);
           setAboutList(aboutdata);
           console.log(aboutList);
          })

     },[]);
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
            <h4 class="centered">Draggital Contact</h4>
          </div>
        </div>
      </div>
      <div className="my-5"></div>
      <div className="container-fluid contact">
        <div className="row gy-4">
          <div className="col-lg-4 col-sm-4 text-center">
            <i className="fa fa-mobile icon"></i><p></p>
            <a className="link" href="tel:9871619176"><i class="fa fa-check"></i>+91 9871619176 <br></br></a>
            <a className="link" href="tel:8588848444"><i class="fa fa-check"></i> +91 8588848444<br></br></a>
            <a className="link" href="tel:9667703379"><i class="fa fa-check"></i> +91 9667703379<br></br></a>
          </div>
          <div className="col-lg-4 col-sm-4 text-center">
            <i className="fa fa-envelope-o icon"></i><p></p>
            <a className="link" href="mailto:info@draggital.com"><i class="fa fa-check"></i> Email: info@draggital.com</a><br></br>
            <NavLink className="link" to="/"><i class="fa fa-check"></i> Web: www.draggital.com</NavLink>
          </div>
          <div className="col-lg-4 col-sm-4 text-center">
            <i className="fa fa-map-marker icon"></i>
            <p>Location: 5C/61, New Rohtak Road<br></br>
             New Delhi, India</p>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="container-fluid">
              <div className="row text-center">
                <div className="col-12 textpaddig">
                  <NavLink
                    exact
                    activeClassName="menu_active"
                    className="nav-link a1 active"
                    to="/talk"
                  >
                    {" "}
                    Talk to Our Experts
                  </NavLink>
                </div>
                <div className="col-12 textpaddig">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link a1"
                    to="/work"
                  >
                    {" "}
                    Work With Us
                  </NavLink>
                </div>
                <div className="col-12 textpaddig">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link a1"
                    to="/get"
                  >
                    {" "}
                    Get a Quote
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <form>
              <div class="group">
                <input type="text" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Name</label>
              </div>

              <div class="group">
                <input type="text" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Subject</label>
              </div>

              <div class="group">
                <input type="text" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Email</label>
              </div>
              <div class="group">
                <input type="text" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Message</label>
              </div>

              <div style={{ textAlign: "center", marginBottom: "7%" }}>
                <button className="btnform"> Submit</button>
              </div>
            </form>
          </div>
        </div>
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
      <Futtor />
    </>
  );
};

export default Contact;
