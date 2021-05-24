import "./styles/navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="logo">
                <h1>My blogo</h1>
            </div>
            <ul className="navlinks">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">New blog</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;