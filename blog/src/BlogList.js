const BlogList = (props) => {     // or we can pass directly: ({blogs,title,handleDelete})
	const blog = props.blogs;
	const title = props.title;

  return (
    <div className="blog-list">
			<h2 className="blog-owner">{ title }</h2>

      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
					<button onClick={() => props.handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
			
    </div>
  );
};

export default BlogList;
