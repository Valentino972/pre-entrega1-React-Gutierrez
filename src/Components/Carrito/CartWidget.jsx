import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);   
    return (
        <div>
            <Link className="shop" to="/carrito">
                <i class='bx bx-cart'></i>
                <span className="item__total">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}

export default CartWidget