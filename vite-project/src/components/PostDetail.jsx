import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    setPost({ id: id, title: 'Example Title', content: 'Example content for this post' });
  }, [id]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}

export default PostDetail;