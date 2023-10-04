import React, { useEffect, useState } from "react";
import axios from "axios";
import Futtor from "../Component/Futtor";
import Banner from "./Banner";
import Client from "../Component/OurClient";
import Card from "./ServiceCard/Card";

function Service() {
  const API = "http://www.website.draggital.in/api";

  const getBanners = async () => {
    const result = await axios.get(`${API}/get-service-header`);
    return result;
  };
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    getBanners().then((service1) => {
      // console.log(banner.data[0]);
      const servicedata = service1.data.map(function (cimg) {
        return cimg;
      });
      //console.log(aboutdata[0].heading2);
      setServiceList(servicedata[0]);
      //console.log(serviceList);
    });
  }, []);
  return (
    <>
      <div className="container-fluid1">
        <div className="">
          <Banner />
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-center"> Our Technologies</h1>
      </div>
      <div className="container">
        <div className="row">
          <p>
            Lorazepam, sold under the brand name Ativan among others, is a
            benzodiazepine medication. It is used to treat anxiety disorders,
            trouble sleeping, active seizures including status epilepticus,
            alcohol withdrawal, and chemotherapy-induced nausea and vomiting.
            Lorazepam, sold under the brand name Ativan among others, is a
            benzodiazepine medication. It is used to treat anxiety disorders,
            trouble sleeping, active seizures including status epilepticus,
            alcohol withdrawal, and chemotherapy-induced nausea and vomiting.
          </p>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-center"> Our Service</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <div className="row">
              <div className="col-10 col-md-4 col-sm-6 max-auto">
                <Card />
              </div>
              <div className="col-10 col-md-4 col-sm-6 max-auto">
                <Card />
              </div>
              <div className="col-10 col-md-4 col-sm-6 max-auto">
                <Card />
              </div>
              <div className="col-10 col-md-4 col-sm-6 max-auto">
                <Card />
              </div>
              <div className="col-10 col-md-4 col-sm-6 max-auto">
                <Card />
              </div>
              <div className="col-10 col-md-4 col-sm-6 max-auto">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Client />

      <div className="suscribe-area" style={{ marginTop: 40 }}>
        <div className="container">
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
}

export default Service;
