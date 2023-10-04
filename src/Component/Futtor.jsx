import React from "react";
import logo from "../images/logo.png";
import FuttorBottemService from "./FuttorBottemService";
import Popup from "./Popup";
import { NavLink } from 'react-router-dom';
import Accrodian from '../Accordian'

const Futtor = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4"
            style={{ marginTop: 50, marginBottom: 50, color: "white" }}
          >
            <img className=" imgfuttorlogo" src={logo} alt="Logo" />
            <p>
              Innovate, Automate, Elevate. <br></br>
              Give your business a chance to grow with us. <br></br>
              Go digital with Draggital.
            </p>
            <ul>
              <li>
                <a target="_blank" href="https://www.facebook.com/Draggital/">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/draggital.in/"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://wa.me/918588848444?text=">
                  <i class="fa fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/68693467/admin/"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/draggital">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.google.com/search?q=draggital&amp;oq=draggital&amp;aqs=chrome.0.69i59j0l2j69i60j69i61l2j69i60l2.3479j0j7&amp;sourceid=chrome&amp;ie=UTF-8"
                >
                  <i class="fa fa-google"></i>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="col-lg 4 "
            style={{ marginTop: 50, marginBottom: 50, color: "white" }}
          >
            <h4 className="h41 text-center">Quick Links</h4>
            <p>
              <NavLink className="footerAnchor" to="/"> <i class="fa fa-check"></i> Pandemic or a Chance to Grow</NavLink>
            </p>
            <p>
              <NavLink className="footerAnchor" to="/"> <i class="fa fa-check"></i>Make Your Online Presence Count </NavLink>
            </p>
            <p>
              <NavLink className="footerAnchor" to="/"> <i class="fa fa-check"></i> The dawn will break soon- and when it does be ready </NavLink>
            </p>
            <p>
              <NavLink className="footerAnchor" to="/"> <i class="fa fa-check"></i> Get your Digital Solution </NavLink>
            </p>
            <p>
              <NavLink className="footerAnchor" to="/"> <i class="fa fa-check"></i> DIGITAL MARKETING-need of the hour</NavLink>
            </p>
            <p>
              <NavLink className="footerAnchor" to="/"><i class="fa fa-check"></i> How is Online Business Eating up Small Businesses </NavLink>
            </p>
          </div>
          <div
            className="col-lg 4 "
            style={{ marginTop: 50, marginBottom: 50, color: "white" }}
          >
            <h4 className="h41  text-center">INFORMATION</h4>
            <p>
              <span>
                 <NavLink className="footerAnchor" to="/privacy"> <i class="fa fa-check"></i> Privacy Policy</NavLink>
               
              </span>
            </p>
          </div>
        </div>
      </div>
      <Accrodian/>
      {/* <div className="accordion-item" style={{ background: "#333333" }}>
        <h2
          className="accordion-header  mb-0"
          style={{ textAlign: "center" }}
          id="flush-headingOne"
        >
          <button
            className="accordion-button collapsed btn btn-link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Services
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          clasame="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body  card-body">
            <FuttorBottemService />
          </div>
        </div>
      </div> */}

      <Popup />
      <div className="my-1">
        <p className="text-center">
          © Copyright <strong>Draggital IT SOLUTIONS LLP</strong>. All Rights
          Reserved
        </p>
      </div>
    </>
  );
};

export default Futtor;
