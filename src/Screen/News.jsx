import axios from "axios";
import React, { useEffect, useState } from "react";
import Futtor from "../Component/Futtor";
import { NavLink } from "react-router-dom";
import img1 from "../images/1.jpg";

const News = () => {
  const API = "https://draggital-backend.herokuapp.com/api";
  const getBanners = async () => {
    const result = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ed7705f4156b4bff8e3ee2b92793b2c0`
    );
    //console.log(result.data.articles[0]);
    return result;
  };
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    getBanners().then((response) => {
      // console.log(banner.data[0]);
      const servicedata = response.data.articles.map(function (cimg) {
        return cimg;
      });
      //console.log(aboutdata[0].heading2);
      setServiceList(servicedata);
      console.log(response.data.articles);
    });
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
              <h4 class="centered">Draggital News</h4>
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
                      {" "}
                      Blog
                    </NavLink>
                  </div>
                  <div className="col-12 textpaddig">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link a1"
                      to="/news"
                    >
                      {" "}
                      News
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* <div className="container-fluid textpaddig1">
                <h2 className="textpaddig">Recent Posts</h2>
                <div className="row text-center">
                  <div className="col-12 ">
                    <NavLink
                      exact
                      activeClassName="menu_active "
                      className="nav-link a1 a5 active "
                      to="/blog"
                    >
                      <img
                        style={{ height: "100px" }}
                        align="left"
                        src={img1}
                        alt="Card image cap"
                      />
                      <a href="#" className="right-text ">
                        4 Reasons Why Lead Generation Will Improve Your Business
                      </a>
                    </NavLink>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-lg-8 col-md-6">
              {serviceList &&
                serviceList.map((item) => {
                  console.log(item.author);
                  return (
                    <div>
                      <img
                        className="card-img-top blog-img"
                        src={item.urlToImage}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <i className="fa fa-calendar">&nbsp;&nbsp;&nbsp;{item.publishedAt}</i> <p></p>
                        <h5 className="card-title text-left">{item.title}</h5>
                        <p className="card-text  text-left">
                          {item.description}
                        
                        </p>
                        {/* <Link aria-current="page" className="buttonWork1"  to="/subnews" hi="hello" img={item.urlToImage} content={item.content}>
                      <span>Learn More</span>
                    </Link>  */}
                        {/* <a aria-current="page" class="buttonWork sus-btn1 " href={`/subblog?id=${item._id}`}><span>Get A Quote</span></a> */}
                      </div>
                    </div>
                  );
                })}
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

export default News;
