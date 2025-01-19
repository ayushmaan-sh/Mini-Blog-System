import React, { useState } from 'react';

function CreatePost({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addPost({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
<>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
      {/* Form fields */}
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Post Title"
        className="w-full mb-4 p-2 border rounded"
        />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Post Content"
        className="w-full mb-4 p-2 border rounded"
        />

      <button type="submit" className="w-full p-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Submit
      </button>
    </form>
</>
  );
}

export default CreatePost;