import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetail({ posts }) {
  const { id } = useParams();
  // Find the post with the matching id
  const post = posts.find(p => p.id === parseInt(id, 10)) || {};

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}

export default PostDetail;
