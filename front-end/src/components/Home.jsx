import React, { useState, useEffect } from 'react';
import UsersView from './UsersView';

function Home({ followed, searched }) {
  console.log("hey there", followed);
  console.log("heehu", searched);
  
  // Determine which section to display: 'home' or 'searching'
  const [activeSection, setActiveSection] = useState(followed.length > 0 ? 'home' : 'searching');

  useEffect(() => {
    // Determine which section to activate based on the last change
    if (followed.length > 0) {
      setActiveSection('home');
    } else {
      setActiveSection('searching');
    }
  }, [followed, searched]);

  return (
    <div className="home">
      {activeSection === 'home' && (
        <div className='home'>
          {followed.map((e, index) => (
            <div className='main-home' key={index}>
              <img className='home-pic' src={e.image} alt={`User ${index} Image`} />
              <h2 className='home-title'> {e.title} </h2>
              <h2 className='home-body'>{e.body}</h2>
            </div>
          ))}
        </div>
      )}

      {activeSection === 'searching' && (
        <div className='home  '>
          {Object.values({searched}).map((e, index) => (
            <div className='searching' key={index}>
              <img className='home-pic' src={e.image} alt={`Search Result ${index} Image`} />
              <h2 className='home-title' > {e.username} </h2>
              <h2 className='home-body'>{e.phoneNumber} </h2>
              <h2 className='home-body'> {e.city}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
