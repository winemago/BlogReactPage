import './styles/home.css'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  // const handleDelete = (id) => {
  //     const newBlogs = blog.filter(blog => blog.id !== id);
  //     setBlog(newBlogs);
  // }

  const {data: blog, ispending, error} = useFetch('http://localhost:8000/blogs');


  return (
    <div className="home">
      { ispending && <div>loading...</div>}
      { error && <div>{ error }</div>}
      { blog && <BlogList blogs = { blog } title="All blogs!" />}
      { blog && <BlogList blogs = { blog.filter((blog) => blog.author === 'piero') } title="Piero's  blogs" />}
    </div>
  );
};
    
export default Home;