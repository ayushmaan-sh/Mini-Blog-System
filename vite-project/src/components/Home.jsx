import React from 'react';
import { Link } from 'react-router-dom';

function Home({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2"><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
            <p className="text-gray-700">{post.content.slice(0, 50)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
