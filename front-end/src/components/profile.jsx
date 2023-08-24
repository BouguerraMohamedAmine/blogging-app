import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileDetails from './ProfileDetails.jsx';

const Profile = () => {
  const [user, setUser] = useState({});
  const [blog, setblog] = useState([]);
  const [bio, setBio] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/blog');
        const userData = response.data;
        console.log(userData); // Check the structure of userData
        setUser(userData);
        // Fetch shared content data as needed
        // ...
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
  
  
    const handleUpdateProfilePicture = () => {
    const newPicture = prompt("Enter the new profile picture URL:");
    if (newPicture) {
      setProfilePicture(newPicture);
    }
  };

  const handleUpdateBio = () => {
    const newBio = prompt("Enter the new bio:");
    if (newBio) {
      setBio(newBio);
    }
  };

  const handleDeleteContent = (id) => {
    const updatedContent = sharedContent.filter(content => content.id !== id);
    setblog(updatedContent);
  };

  return (
    <div className="profile-container">
      <ProfileDetails user={user} />
      <div className='wall'>
        <div className="feed">
          <div className="shared-content">
            <h3>Shared Content</h3>
            <ul>
              {blog.map(blog => (
                <li key={blog.title}>
                  <img src={blog.image} alt="Photo Icon" />
                  <p>{blog.body}</p>
                  <p>{blog.date}</p>
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
