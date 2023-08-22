import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
function Header() {
	return (
		<div>
			<div className="logo">
				<div className='top-head'>
					<img className="logo-img" src={logo} />
					<div className="navigation">
  <a className="button" href="">
    <img className='user-pic' src="https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg" alt="Profile Image" />
    <div className="logout">LOGOUT</div>
  </a>
</div>

				</div>
                <div className="main-search">
                <input type="text" name="text" class="search-input" pattern="[A-Za-z0-9 ]+" placeholder="Numbers only or shake"/>
                <button className='search-btn'>search</button>
                </div>
				<div className="navbar">
					<h4> PROFILE</h4>
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
