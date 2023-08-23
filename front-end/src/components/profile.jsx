import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [sharedContent, setSharedContent] = useState([]);
  const [bio , setBio] = useState("")

  const handleUpdateProfilePicture = () => {
    const newPicture = prompt("Enter the new profile picture URL:");
    if (newPicture) {
      setProfilePicture(newPicture);
    }
  };

  useEffect(() => {
    // Fetch user data from the server
    axios.get('http://127.0.0.1:5000/user') // Replace with your actual API endpoint
      .then(response => {
        console.log('API Response:', response.data); // Debugging
        const userData = response.data; // Assuming user data is directly in the response
        setProfilePicture(userData.image);
        setUsername(userData.username);
        setPhoneNumber(userData.phoneNumber);
        setCity(userData.city);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  
  const handleUpdateBio = () => {
    const newBio = prompt("Enter the new bio:");
    if (newBio) {
      setBio(newBio);
    }
  };

  const handleDeleteContent = (id) => {
    const updatedContent = sharedContent.filter(content => content.id !== id);
    setSharedContent(updatedContent);
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <div className="profile-picture">
          <img
            src={profilePicture}
            alt="Profile"
          />
          <button onClick={handleUpdateProfilePicture}>Update Picture</button>
        </div>
        <div className="bio">
          <h2>{username}</h2>
          <p>Phone Number: {phoneNumber}</p>
          <p>City: {city}</p>
          <button onClick={handleUpdateBio}>Update Bio</button>
        </div>
      </div>
      <div className='wall'>
        <div className="feed">
          <div className="shared-content">
            <h3>Shared Content</h3>
            <ul>
              {sharedContent.map(content => (
                <li key={content.id}>
                  <img src={content.image} alt="Photo Icon" />
                  <p>{content.caption}</p>
                  <button onClick={() => handleDeleteContent(content.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
