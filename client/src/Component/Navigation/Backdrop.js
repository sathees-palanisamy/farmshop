import React from 'react';
import { Link } from "react-router-dom";

const Backdrop = (props) => (
  props.show ?
    <div className="Backdrop" >
      <div className="subTitle" >
        <p><b>Door to Door Delivery</b></p>
      </div>
      <ul className="side-nav" onClick={props.backDropToggle} >
        <li>
          <i className="ion-ios-home icon-small"></i>
          <Link to="/">Home</Link>
        </li>
        <li>
          <i className="ion-ios-photos icon-small "></i>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <i className="ion-ios-car icon-small "></i>
          <Link to="/shipping">Track</Link>
        </li>
        <li >
          <i className="ion-ios-basket icon-small"></i>
          <Link to="/basket">basket</Link>
        </li>
        <li>
          <i className="ion-ios-call icon-small"></i>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    : null
);

export default Backdrop;