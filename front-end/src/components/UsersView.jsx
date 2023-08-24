import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Use an async function to fetch data and update state
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/user'); // Corrected URL
        setUsers(response.data); // Update the state with fetched data
        console.log(response.data); // Log the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData(); // Call the async function
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className='main-users'>
    <p className='dot-users'>
      .
    </p>
      {users.map(user => (
        <div key={user.id} className="one-user">
          <p className='one-name'>{user.username}</p>
         <div>
          <img className='one-pic' src={user.image} alt={user.username} /> {/* Closing tag for <img> */}

         </div>
          <button className='one-plus'>+</button> {/* Closing angle bracket */}
        </div>
      ))}
    </div>
  );
}

export default UsersView;
