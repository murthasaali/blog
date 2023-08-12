import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Createblogs from './components/createblogs';
import Blog from './components/blog';
import { BlogContext } from './components/context';
import { useState } from 'react';
import Showblog from './components/showblog';
function App() {
  const[post,setPost]=useState([])
  return (
    <div className="App">
      <BlogContext.Provider value={{post,setPost}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Createblogs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/showblog/:id" element={<Showblog />} />
        </Routes>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
