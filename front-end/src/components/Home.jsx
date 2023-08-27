import React from 'react';
import UsersView from './UsersView';

function Home({ followed, searched }) {
  console.log("hey there", followed);
  console.log("heehu",searched);
  const searchedArray = Object.values(searched);
console.log(searchedArray)
  return (
    <div className="home">
      {followed.map((e, index) => (
        <div className='main-home' key={index}>
          <img className='home-pic' src={e.image} alt={`User ${index} Image`} />
          <h2 className='home-title'> {e.title} </h2>
          <h2 className='home-body'>{e.body}</h2>
        </div>
      ))}
      
      <div className='searching'>
        {searchedArray.map((e, index) => (
          <div key={index}>
            <img src={e.image} alt={`Search Result ${index} Image`} />
            <h2>{e.username}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
