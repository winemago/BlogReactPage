import { Link } from "react-router-dom";
import logo from "./error.svg";

const NotFound = () => {
    return(
        <div className="not-found">
            <img src={ logo } alt="404" />
            <Link to="/"> Back to Home</Link>
        </div>
    );
}

export default NotFound;