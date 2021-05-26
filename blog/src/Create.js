import { useState } from "react";
import './styles/create.css';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [ispending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit= async(e) =>{
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);
        
        try{
            const response = await fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            });
            const data = await response.json();
            setIsPending(false);
            history.push('blogs/' + data.id);
        }
        catch(err){
            console.error(err);
        }
        
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog!</h2>
            <form onSubmit={ handleSubmit }>
                <label >Blog Title:</label>
                <input type="text" value={ title } onChange={(e)=> setTitle(e.target.value)} required/>
                <label >Blog Content:</label>
                <textarea cols="20" rows="5" value={ body } onChange={(e)=> setBody(e.target.value)} required></textarea>
                <label >Blog Author:</label>
                <input type="text"  value={ author } onChange={(e) => setAuthor(e.target.value)} required/>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button disabled>Adding Blog</button>}
            </form> 
        </div>
    );
}
 
export default Create;