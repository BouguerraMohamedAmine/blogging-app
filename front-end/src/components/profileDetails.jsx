import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Don't forget to import axios

const ProfileDetails = ({ username, image, phoneNumber, city }) => {
  const [userData, setUserData] = useState([]); // Initialize userData as an empty object

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/user');
        const userData = response.data;
        console.log("this is user",userData); // Check the structure of userData
        setUserData(userData[1]); // Update the state with fetched data
        // Fetch shared content data as needed
        // ...
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profile-left">
      <div className="profile-picture">
        <img src={userData.image} alt="ProfilePicture" />
      </div>
      <div className="bio">
        <h2>{userData.username }</h2>
        <p>Phone Number: {userData.phoneNumber }</p>
        <p>City: {userData.city}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
