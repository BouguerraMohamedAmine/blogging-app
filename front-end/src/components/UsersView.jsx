import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersView({ onUserSelect }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/user');
        setUsers(response.data);
        console.log("we talk bt",response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleUserClick = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/blog/user/${userId}`);
      const userData = users.find(user => user.id === userId);
      onUserSelect( response.data ); // Pass user and blog data to parent component
    } catch (error) {
      console.error('Error fetching user blogs:', error);
    }
  };

  return (
    <div className='main-users'>
      <p className='dot-users'>.</p>
      {users.map(user => (
        <div key={user.id} className="one-user">
          <p className='one-name'>{user.username}</p>
          <div>
            <img className='one-pic' src={user.image} alt={user.username} />
          </div>
          <button className='one-plus' onClick={() => handleUserClick(user._id)}>+</button>
        </div>
      ))}
    </div>
  );
}

export default UsersView;
