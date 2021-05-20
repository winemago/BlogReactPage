import './styles/home.css'
import {useState } from 'react';

const Home = () => {
  // const [name, setName] = useState('marioh');
  // const [age, setAge] = useState(30);

  // const handleClick = () => {
  //   setName('piero');
  //   setAge(24);
  // }
  const [blog, setBlog] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3},
  ]);

  return (
    <div className="home">
      {/* <p>{name} is {age} old </p       
					     <button onClick={handleClick}> Clickme</button> */}
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};
    
export default Home;