import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                My Restaurant
            </h1>
            <div className="links">
                <Link to="/">
                    Home
                </Link>
                <Link to="/adddish">
                    Add Dish
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;