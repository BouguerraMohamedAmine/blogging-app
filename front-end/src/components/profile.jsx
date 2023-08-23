import React, { useState } from 'react';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState("https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg");
  const [bio, setBio] = useState("Frontend Developer");
  const [sharedContent, setSharedContent] = useState([
    {
      id: 1,
      image: "https://imgs.search.brave.com/bvYgX_x0u1gu5AWn_rQj4T2eDIPcJVt5rHM1KH-IG5M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/OTI3MTU5OC9waG90/by9mZW1pbmluZS1j/YXN1YWwtY2xvdGhl/cy1pbi1jbG90aGVz/LXJhY2suanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU9kTE9y/MFdBQU1OV01EUUJS/MG84bXB0S3BWREZW/UGF2aVRKWGJvMW05/N1U9",
      caption: "Photo: Sunset at the Beach"
    }
  ]);

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
          <h2>{bio}</h2>
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
