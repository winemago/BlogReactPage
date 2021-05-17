import "./styles/navbar.css"

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="logo">
                <h1>My blogo</h1>
            </div>
            <ul className="navlinks">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">New blog</a>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;