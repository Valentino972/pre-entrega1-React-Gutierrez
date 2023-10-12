import { Link } from "react-router-dom";
import './Navbar.css';



const Navbar = () => {
    return (
        <nav>
            <a><Link to={'/'} className="logo">Football boots.</Link></a>

            <ul className="navbar">
                <li className="menu_link"><Link to={'/'}>Home</Link></li>
                <li className="menu_link"><Link to={'/productos'}>Productos</Link></li>
                <li className="menu_link"><Link to={'/productos/nike '}>Nike</Link></li>
                <li className="menu_link"><Link to={'/productos/adidas'} >Adidas</Link></li>
                <li className="menu_link"><Link to={'productos/puma'} >Puma</Link></li>
                
            </ul>

            <div className="shop">
            <i class='bx bx-cart'></i>
                <span className="item__total">0</span>
            </div>
        </nav>

        
                
    );
}
export default Navbar;
