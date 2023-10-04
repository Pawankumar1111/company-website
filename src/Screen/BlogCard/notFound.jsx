import React from "react";
import { NavLink } from "react-router-dom";
import Not from "../../images/404.svg";
import rocket from "../../images/rocket.svg";
import earth from "../../images/earth.svg";
import moon from "../../images/moon.svg";
import astronaut from "../../images/astronaut.svg";

const NotFound = () => {
  return (
    <>
      <div class="bg-purple" style={{ marginTop: 20 }}>
        <div class="stars">
          <div class="central-body">
            <img class="image-404" src={Not} style={{ width: "300px" }} />
            <NavLink to="/" class="btn-go-home" target="_blank">
              GO BACK HOME
            </NavLink>
          </div>
          <div class="objects">
            <img class="object_rocket" src={rocket} style={{ width: "40px" }} />
            <div class="earth-moon">
              <img
                class="object_earth"
                src={earth}
                style={{ width: "100px" }}
              />
              <img class="object_moon" src={moon} style={{ width: "80px" }} />
            </div>
            <div class="box_astronaut">
              <img
                class="object_astronaut"
                src={astronaut}
                style={{ width: "140px" }}
              />
            </div>
          </div>
          <div class="glowing_stars">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
