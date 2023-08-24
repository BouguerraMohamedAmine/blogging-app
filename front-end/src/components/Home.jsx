import React from 'react';
import UsersView from './UsersView';

function Home({ followed }) {
  console.log("hey there", followed);

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      {
        followed.map((userBlogs, index) => (
          <div key={index}>
            <h2> User: {userBlogs.username} </h2>
            {userBlogs.blogs.map(blog => (
              <div key={blog.id}>
                <p>{blog.title}</p>
                <img src={blog.image} alt={blog.title} />
                <p>{blog.body}</p>
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
}

export default Home;
