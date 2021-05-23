import './styles/home.css'
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blog, setBlog] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "piero", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "piero", id: 3},
  ]);

  const handleDelete = (id) => {
      const newBlogs = blog.filter(blog => blog.id !== id);
      setBlog(newBlogs);
  }

  useEffect(()=>{
    console.log('use effect');
  });
  return (
    <div className="home">
        <BlogList blogs = { blog } title="All blogs!" handleDelete = { handleDelete }/>
        <BlogList blogs = { blog.filter((blog) => blog.author === 'piero') } title="Piero's  blogs" handleDelete = { handleDelete }/>
    </div>
  );
};
    
export default Home;