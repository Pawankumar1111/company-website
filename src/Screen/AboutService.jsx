import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AboutAction } from "../Redux/Actions/AboutAction";
import axios from "axios";
import Cart from "./AboutCard/AboutCard";

const AboutCard = () => {
  const API = "https://draggital-backend.herokuapp.com/api";

  // const getBanners = async () => {
  //   const result = await axios.get(`${API}/get-about`);
  //   return result;
  // };
  // const [aboutList, setAboutList] = useState([]);

  // useEffect(() => {
  //   getBanners().then((about) => {
  //     // console.log(banner.data[0]);
  //     const aboutdata = about.data.map(function (cimg) {
  //       return cimg;
  //     });
  //     //console.log(aboutdata[0].heading2);
  //     setAboutList(aboutdata[0]);
  //     console.log(aboutdata);
  //   });
  // }, []);

   const [about, setAbout] = useState([]);
   const getAbout = useSelector((state) => state.getAbout);
   const { items } = getAbout;
   console.log("hii")
console.log(items)
// setAbout=(items)
console.log(about)
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(AboutAction());
   }, []);
  return (
    <>
      <div className="container" >
        <div className="row gy-4">
          <div className="col-10 col-md-3 col-sm-6 max-auto">
          {items && items.map((item) =>{
            return(
              <Cart
                headding={item.heading1}
               oneLiner={item.oneLiner1}
              img={`${API}/get-about-image?name=image1`}
            />
            )
          })}
            
          </div>
          <div className="col-10 col-md-3 col-sm-6 max-auto">
          {items && items.map((item) =>{
            return(
              <Cart
                headding={item.heading2}
               oneLiner={item.oneLiner2}
              img={`${API}/get-about-image?name=image2`}
            />
            )
          })}
            
          </div>
          <div className="col-10 col-md-3 col-sm-6 max-auto">
          {items && items.map((item) =>{
            return(
              <Cart
                headding={item.heading3}
               oneLiner={item.oneLiner3}
              img={`${API}/get-about-image?name=image3`}
            />
            )
          })}
            
          </div>
          <div className="col-10 col-md-3 col-sm-6 max-auto">
          {items && items.map((item) =>{
            return(
              <Cart
                headding={item.heading4}
               oneLiner={item.oneLiner4}
              img={`${API}/get-about-image?name=image4`}
            />
            )
          })}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
