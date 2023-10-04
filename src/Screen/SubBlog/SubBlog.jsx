import React, { useEffect, useState } from "react";
import axios from "axios";
import Futtor from "../../Component/Futtor";
import Banner from "../Banner";
import Card from "./Card";
import img1 from "../../images/1.jpg";
import { NavItem } from "react-bootstrap";
import BlogCard from "../BlogCard/BlogCard";

const SubBlog = () => {
  const url = window.location.href;
  const queryb = url.split("=");
  console.log(queryb[1]);
   const API = "https://www.website.draggital.in/api";
// changed

  const getBlogDetail = async () => {
    const result = await axios.get(`${API}/get-post-by-id`, {
      headers: { id: queryb[1] },
    });
    return result;
  };
  const [blogDetail, setBlogDetail] = useState([]);

  useEffect(() => {
    const loadBlogDetail = async () => {
      const resp = await getBlogDetail();
      setBlogDetail(resp.data);
      console.log(blogDetail.date);
      console.log(resp.data);
    };
    loadBlogDetail();
  }, []);

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
              <h4 class="centered">{blogDetail.title}</h4>
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
                 Recent Blog<br></br>
                </button>
               
                <BlogCard/>
              </div>
              
            </div>
            <div className="col-lg-8 col-md-6">
            <div className="container-fluid1 sub-container">
              <Card
               date={blogDetail.date}
                description={blogDetail.description}
                tags={blogDetail.tags}
                heading={blogDetail.heading}
                name={blogDetail.name}
                oneLiner={blogDetail.oneLiner}
                id={blogDetail._id}
                
                tags={blogDetail.isChecked}
              />
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

export default SubBlog;
