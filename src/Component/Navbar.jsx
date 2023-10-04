import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bottomServiceAction } from '../Redux/Actions/BottomSerAction'
import { Link } from 'react-scroll';
import logo from '../images/logo.png'
import { NavLink } from "react-router-dom";
import { NavBar, Nav, NavItem} from 'react-bootstrap';

const Navbar = () => {
  const getService = useSelector(state => state.getSubService)
  const { bottoms } = getService
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bottomServiceAction)
  }, [])

  return (
    <>

      <Nav className="navbar sticky-top navbar-expand-lg navbar-light" >
        <div className="container-fluid containerNav">
          <NavLink to="/">
            <img src={logo} alt={logo} className="logo" />  </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact activeClassName="menu_active" className="nav-link active active1" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <Link activeClassName="menu_active" className="nav-link  active1" aria-current="page" to="about">About Us</Link>

              </li>
              <li className="nav-item">
                <Link activeClassName="menu_active" className="nav-link  active1 servicePoint" aria-current="page" to="service">Service</Link>
                <ul className="toggleSrv">
                  <li>service1</li>
                </ul>
              </li>
              {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle active1" activeClassName="menu_active"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Service
        </a> */}
              {/* {bottoms&&bottoms.map((item,index) => { */}
              {/* return( <div className="dropdown-menu show1" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item active1" to="/" key={index}>{item.serviceNameHeader}</Link> */}
              {/* <a className="dropdown-item active1" href="#">Another action</a>
          <a className="dropdown-item active1" href="#">Something else here</a> */}
              {/* </div> */}
              {/* )
        })} */}
              {/* </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active1" activeClassName="menu_active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Buzz
                </a>
                <div className="dropdown-menu show1" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item active1" to="/blog">Blog</NavLink>
                  <NavLink className="dropdown-item active1" to="/news">News</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link  active1" aria-current="page" to="/work">Careers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link active1" aria-current="page" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Nav>

    </>
  )
};

export default Navbar;