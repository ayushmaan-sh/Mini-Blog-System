import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import About from './components/About';

function App() {
  const [posts, setPosts] = useState([
    // { id: 1, title: 'First Post', content: 'This is the first post content' },
    // { id: 2, title: 'Second Post', content: 'Here comes the second post' },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]); // Use timestamp as a unique id
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        {/* Navigation and styling */}
        <header className="bg-indigo-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">My Blog</Link>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/create" className="hover:underline">Create Post</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/post/:id" element={<PostDetail posts={posts} />} />
            <Route path="/create" element={<CreatePost addPost={addPost} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        {/* Footer */}
      </div>
    </Router>
  );
}

export default App;
