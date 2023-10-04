import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ServiceAction } from "../../Redux/Actions/ServiceAction";

const Card = (props) => {
  // const [service, setService] = useState([]);
  // const getServiceHead = useSelector((state) => state.getServiceHead);
  // const { services } = getServiceHead;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(ServiceAction());
  // }, []);

  return (
    <>
      <div className="content">
        <div className="content-overlay"></div>
        
              <div>
                <div className="img1 text-center">
                  <center>
                    <i className="fa fa-tv"></i>
                  </center>
                  <br />
                 
                  {props.service}
                </div>
                <div className="content-details fadeIn-bottom">
                  <p className="content-title">
                    Automate Your Business with Our best software Development
                    Services
                  </p>
                  <p className="content-text">
                    <a
                      aria-current="page"
                      className="buttonWork1"
                      href={`/subservice?id=${props.id}`}
                    >
                      <span>Learn More</span>
                    </a> 
                  </p>
                </div>
              </div>
      </div>
    </>
  );
};

export default Card;
