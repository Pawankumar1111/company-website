import React from 'react'
import { NavLink } from 'react-router-dom';
import work2 from '../images/work2.jpg'

const Work = ()=> {
  return (
    <>
      <div className="container-fluid">
            <div className="row work">
              <div className="col-lg-6 work2">           
              </div>   
              <div className="col-lg-6 work1">
                <div className="work3">
                <h4>WORKING WITH US</h4>
                <h6>OPEN A NEW DOOR OF OPPORTUNITIES FOR YOUR BUSINESS.</h6>
                <NavLink to="" class="buttonWork"><span>Contact us</span></NavLink>
                </div>
                
                
              </div>
            </div>
        </div>
      
    </>
  );
}

export default Work;
