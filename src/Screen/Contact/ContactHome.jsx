import React from "react";

const ContactHome = () => {
  return (
    <>
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
          <label>Subject</label>
        </div>

        <div class="group">
          <input type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
        </div>
        <div class="group">
          <input type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Message</label>
        </div>

        <div style={{ textAlign: "center", marginBottom: "7%" }}>
          <button className="btnform"> Submit</button>
        </div>
      </form>
    </>
  );
};

export default ContactHome;
