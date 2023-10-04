import { Link } from "react-router-dom";



const NavBar = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">Football boots.</Link>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/All">All</Link>
                <Link to="#">Nike</Link>
                <Link to="#">Adidas</Link>
                <Link to="#">Puma</Link>
                <Link to="#">Shop</Link>
            </nav>

            <div className="shop">
                <i class='bx bx-shopping-bag'></i>
            </div>


        </header>
                
    );
}
export default NavBar;
