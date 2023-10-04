import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ServiceAction } from "../Redux/Actions/ServiceAction";
import Card from "./ServiceCard/Card";

const HomeServices = () => {
  const [service, setService] = useState([]);
  const getServiceHead = useSelector((state) => state.getServiceHead);
  const { services } = getServiceHead;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ServiceAction());
  }, []);

  const [loding, setLoding] = useState(true);
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className=" max-auto">
            <div className="row gy-3">
            {services &&
          services.map((item) => {
            return (
              <div className=" col-md-4 col-sm-6 max-auto">
                
              {loding && (
                <>
                <Card service={item.serviceNameHeader} id={item._id}/>
                
              </>
              )}
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServices;
