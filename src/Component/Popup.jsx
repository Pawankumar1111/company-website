import React from 'react'
import Help from '../images/call1.png'
const Popup = () => {
    return (
        <>
<div className="btn-group dropup">
  <p data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <img src={Help} alt="" className="call1 btnlode"/>
  </p>
  <div className="dropdown-menu">
      <ul style={{marginLeft:23}}>
          <li><i class="fa fa1 whatsapp fa-whatsapp"></i></li>
          <li><i class="fa fa1 phone fa-phone"></i></li>
          <li><i class="fa fa1 instagram fa-instagram"></i></li>
          <li><i class="fa fa1 facebook fa-facebook-f"></i></li>
          <li><i class="fa fa1 linkedin fa-linkedin"></i></li>
          <li><i class="fa fa1 twitter fa-twitter"></i></li>
          <li><i class="fa fa1 envelope fa-envelope"></i></li>
      </ul>
  </div>
</div>
 
        </>
    )
};
export default Popup;
