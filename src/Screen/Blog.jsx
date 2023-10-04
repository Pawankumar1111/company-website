import React, { useEffect, useState } from "react";
import Futtor from "../Component/Futtor";
import Card from "./BlogCard/BlogCard";
import { NavLink } from "react-router-dom";
import img1 from "../images/1.jpg";

const Blog = () => {
  const API = "https://draggital-backend.herokuapp.com/api";
  return (
    <>
      <div className="">
        <div className="container-fluid1">
          <div className="">
            <div className="container1">
              <img
                className="img-fluid imgBaner"
                src={`${API}/get-about-image?name=image1`}
                alt="blog slide"
              />
              <h4 class="centered">Draggital Blog</h4>
          
            </div>
          </div>
        </div>
        <div className="my-5"></div>

        <div className="container  blog-head">
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="container-fluid">
                <div className="row text-center">
                  <div className="col-12 textpaddig">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link a1 active"
                      to="/blog"
                    >
                      Blog
                    </NavLink>
                  </div>
                  <div className="col-12 textpaddig">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link a1"
                      to="/news"
                    >
                      News
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <Card />
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
      </div>
    </>
  );
};

export default Blog;
