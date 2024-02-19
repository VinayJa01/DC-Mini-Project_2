// Home.js
import React from "react";
import "./Home.css";

function Home({ posts }) {
  return (
    <div className="page">
      <h1>Welcome to the Home Page</h1>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <div className="post-header">
              <h2>{post.username}</h2>
              <p>{post.timestamp.toLocaleString()}</p>
            </div>
            <p className="post-message">{post.message}</p>
            <div className="post-details">
              <div className="post-comments">
                <h3>Comments</h3>
                <ul>
                  {post.comments.map((comment, cIndex) => (
                    <li key={cIndex}>{comment}</li>
                  ))}
                </ul>
              </div>
              <div className="post-likes">
                <h3>Likes</h3>
                <p>{post.likes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
