import { Link } from "react-router-dom";
import './Navbar.css';
import '../Contacto/Contacto';
import CartWidget from "../Carrito/CartWidget";



const Navbar = () => {
    return (
        <nav>
            <a><Link to={'/'} className="logo">Football boots.</Link></a>

            <ul className="navbar">
                <li className="menu_link"><Link to={'/'}>Home</Link></li>
                <li className="menu_link"><Link to={'/productos'}>Productos</Link></li>
                <li className="menu_link"><Link to={'/productos/nike '}>Nike</Link></li>
                <li className="menu_link"><Link to={'/productos/adidas'} >Adidas</Link></li>
                <li className="menu_link"><Link to={'/productos/puma'} >Puma</Link></li>
                <li className="menu_link"><Link to={'/contacto'}>Contacto</Link></li>
                
            </ul>

            <CartWidget/>
        </nav>

        
                
    );
}
export default Navbar;
