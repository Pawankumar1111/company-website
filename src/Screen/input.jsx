import React from "react";
import { NavLink } from "react-router-dom";

const input = () => {
  return (
    <>
      <div class="container">
        <form>
          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Name</label>
          </div>

          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Email</label>
          </div>
        </form>
      </div>
    </>
  );
};

export default input;
