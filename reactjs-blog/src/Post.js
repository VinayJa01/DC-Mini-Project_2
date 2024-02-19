import React from "react";
import { useParams } from "react-router-dom";

const Post = ({ posts }) => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div>
      <h2>{post.username}'s Post</h2>
      <p>{post.message}</p>
      <p>Timestamp: {post.timestamp.toString()}</p>
    </div>
  );
};

export default Post;
