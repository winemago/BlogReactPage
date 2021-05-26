import "./styles/navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="logo">
                <Link to="/">My blogo</Link>
            </div>
            <ul className="navlinks">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create+</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;