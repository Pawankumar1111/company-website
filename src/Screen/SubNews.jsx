import React, { useEffect, useState } from "react";
import axios from "axios";
import Futtor from "../Component/Futtor";
import img1 from "../images/1.jpg";

const SubNews = (props) => {
  const API = "https://draggital-backend.herokuapp.com/api";


  return (
    <>
      <div className="">
        <div className="container-fluid1">
          <div className="">
            <div className="container1">
              <img
                className="img-fluid imgBaner"
                src={img1}
                alt="blog slide"
              />
              {/* <h4 class="centered">{blogDetail.title}</h4> */}
            </div>
          </div>
        </div>
        <div className="my-5"></div>

        <div className="container  blog-head">
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="list-group">
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  Blog<br></br>
                </button>
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  news<br></br>
                </button>
              </div>
              <div className="container-fluid sub-container">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="card-img-top sub-blog"
                      src={img1}
                      alt="Card image cap"
                    /> 
                  </div>
                  <div className="col-md-6 sub-text">
                    <a href="#" className="left-text">
                      4 Reasons Why Lead Generation Will Improve Your Business
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
            <div className="card-blog">
        <div>
           <img
            className="card-img-top blog-img"
            src={props.img}
            alt="Card image cap"
          /> 
          <div className="card-body">
            <i className="far fa-calendar"></i>
            <h5 className="card-title text-left">{props.content}</h5>
            <p className="card-text  text-left">{props.hii}</p>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>

        <div className="suscribe-area" style={{ marginTop: 40 }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
                <div className="suscribe-text text-center">
                  <h4>Get Best SEO Service</h4>
                  <a
                    aria-current="page"
                    className="buttonWork sus-btn "
                    href="/"
                  >
                    <span>Talk to our Experts</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Futtor />
      </div>
    </>
  );
};

export default SubNews;
