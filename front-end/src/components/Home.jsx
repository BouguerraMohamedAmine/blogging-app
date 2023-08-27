import React from 'react';
import UsersView from './UsersView';

function Home({ followed , searchResults }) {
  console.log("hey there", followed);
console.log ('haw search li theb alih w sayebni' , searchResults)
  return (
    <div className="home">
      
      {
        followed.map((e, index) => (
          <div className='main-home' key={index}>
          <img className='home-pic' src={e.image}/>
          <h2 className='home-title'> {e.title}   </h2>
          <h2 className='home-body'>
          {e.body}

            </h2>
          </div>
        ))
      }
    </div>
  );
}

export default Home;
