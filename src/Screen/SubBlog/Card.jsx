import React, { useState, useEffect } from "react";

const Card = (props) => {
  // const getBlogAll = useSelector((state) => state.getBlogAll);
  // const { blogs } = getBlogAll;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(blogAction());
  // }, []);
  return (
    <>
      <div className="card-blog">
        <div>
          <img
            className="card-img-top blog-img"
            src={`https://www.website.draggital.in/api/get-blog-image?id=${props.id}`}
            alt="Card image cap"
          />
        
          <div className="card-body">
            <h2 className="card-title text-left">{props.heading}</h2>
            <h5> {props.oneLiner}</h5>
            <p> {props.tags}</p>
           <span> {props.name} | </span>
            <i className="fa fa-calendar">{props.date}</i>
            <p className="card-text  text-left">{props.description}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
