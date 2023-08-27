	import React, { useState } from "react";
	import logo from "../assets/LOGO3.png";
	import axios from "axios";

	function Header({ changes  }) {

		const [searchText, setSearchText] = useState("");
		

		const handleSearch = async () => {
			try {
			  if (searchText.trim() === "") {
				console.error("Search text is empty.");
				return;
			  }
			  const response = await axios.get(
				`http://127.0.0.1:5000/users/${searchText}`
			  );
			  console.log("Response data:", response.data);
			  changes.search(response.data);
			} catch (error) {
			  console.error("Error fetching search results:", error.response);
			  changes.search([]);
			}
		  };
					  
		return (
			<div>
				<div className="logo">
					<div className="top-head">
						<img className="logo-img" src={logo} />
						<div className="navigation">
							<a className="button" href="">
								<img
									className="user-pic"
									src={changes.pic}
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
					placeholder="Type something to look for ..."
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					/>
					<button className="search-btn" onClick={handleSearch}>
					Search
					</button>
					
				  </div>
							<div className="navbar">
						<h4 onClick={changes.changeprofile}> PROFILE</h4>
						<h4 onClick={changes.changehome}> HOME</h4>
						<h4 onClick={changes.changenews}> NEWS</h4>
						<h4 onClick={changes.changecontact}> CONTACT US</h4>
					</div>
					

			</div>
			</div>
		);
	}

	export default Header;
