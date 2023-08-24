import React from "react";
import logo from "../assets/logo.png";

function Header({ onProfileClick }) {
  return (
    <div>
      <div className="logo">
        <div className='top-head'>
          <img className="logo-img" src={logo} alt="Logo" />
          <div className="navigation">
            <a className="button" href="">
            <img
                className='user-pic'
                src=""
                alt="Profile Image"
              />
              <div className="logout">LOGOUT</div>
            </a>
          </div>
        </div>
        <div className="main-search">
          <input
            type="text"
            name="text"
            className="search-input"
            pattern="[A-Za-z0-9 ]+"
            placeholder="Numbers only or shake"
          />
          <button className='search-btn'>search</button>
        </div>
        <div className="navbar">
          <h4 onClick={onProfileClick}> PROFILE</h4>
          <h4> HOME</h4>
          <h4> NEWS</h4>
          <h4> USERS</h4>
          <h4> CONTACT US</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;