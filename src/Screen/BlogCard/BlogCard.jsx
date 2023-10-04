import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlogAction } from "../../Redux/Actions/BlogAction";

const Card = () => {
  const getBlog = useSelector((state) => state.getBlog);
  const { blogs } = getBlog;
  console.log(blogs)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BlogAction());
  }, []);
  return (
    <>
      <div className="card-blog">
        {blogs &&
          blogs.map((item) => {
            //console.log(item.id)
            return (
              <div>
                <img
                  className="card-img-top blog-img1"
                  src={`https://www.website.draggital.in/api/get-blog-image?id=${item._id}`}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h3 className="card-title text-left">{item.heading}</h3>
                  <h5> {item.oneLiner}</h5>
                  <span> {item.name} | </span>
                  <i className="fa fa-calendar">{item.date}</i>
                  <p className="card-text  text-left">
                    {item.description.substring(0, 150)}...
                  </p>
                  <a
                    aria-current="page"
                    class="buttonWork sus-btn1 "
                    href={`/subblog?id=${item._id}`}
                  >
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Card;
