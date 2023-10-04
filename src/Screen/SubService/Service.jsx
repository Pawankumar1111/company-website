import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../Banner";
import Futtor from "../../Component/Futtor";
import Card from "./SubServiceCars/SubServiceCard";
import Client from "../../Component/OurClient";
import query from "query-string";
import banner2 from "../../images/1.jpg";
// import MultiSlider from '../../MultiSlider'

const Service = () => {
  const url = window.location.href;
  const queryP = url.split("=");
  const [loding, setLoding] = useState(false);

  const API = "http://www.website.draggital.in/api";

  const getBanners = async () => {
    const result = await axios.get(`${API}/get-service-by-id`, {
      headers: { id: queryP[1] },
    });  
    return result;
  };
  const [aboutList, setAboutList] = useState([]);

  useEffect(() => {
    const loadservice = async () => {
      const resp = await getBanners();
      setAboutList(resp.data);
      setLoding(true);
      console.log(aboutList);
      console.log(resp.data);
    };
    loadservice();
  }, []);
  return (
    <>
      <div className="container-fluid1">
        <div className="row">
          <div className="container1">
            {loding && (
              <>
                <img
                  className="img-fluid imgBaner"
                  src={banner2}
                  alt="blog slide"
                />
                <h4 class="centered">
                  {aboutList.subServiceList[0].subServiceName}
                </h4>
                <h4 class="centered1">
                  {aboutList.subServiceList[0].subServiceOneLiner}
                </h4>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="my-5">
        {loding && (
          <>
            <h1 className="text-center">
              {aboutList.subServiceList[0].subServiceOverview}
            </h1>
          </>
        )}
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
        <h1 className="text-center"> Process</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className=" max-auto">
            <div className="row gy-4">
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

      <div style={{ marginTop: 20 }}>{/* <MultiSlider /> */}</div>

      <div class="suscribe-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs=12">
              <div class="suscribe-text text-center">
                <h3>
                  Get Best
                  {loding && (
                    <> {aboutList.subServiceList[0].subServiceName} </>
                  )}{" "}
                  Service
                </h3>
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

export default Service;
