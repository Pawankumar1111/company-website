import React from "react";

const AboutCard = (props) => {
  return (
    <>
      <h5 className="text-center">{props.headding}</h5>
      <div class="hovereffect">
         <img class="img-responsive" src={props.img} alt="" /> 
        <div class="overlay">
            
          <p>
          <h2>{props.oneLiner}</h2>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
