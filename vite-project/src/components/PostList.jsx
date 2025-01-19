import React from 'react';
import { Link } from 'react-router-dom';

function PostList() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-2">Post 1</h2>
          <p className="text-gray-600">Short description of post 1...</p>
          <Link to="/post/1" className="text-blue-500 hover:underline mt-4 inline-block">Read more</Link>
        </div>
        {/* Add more posts as needed */}
      </div>
    </div>
  );
}

export default PostList;
