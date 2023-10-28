import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import "./carrito.css";

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

return (
    <div className='container-carrito'>
        <h1 className="main-title  title-carrito">Carrito 🛒 </h1>

        
            <div className='container-carrito-prod'>
            {carrito.map((prod) => (
                <div className='container-prod' key={prod.id}>
                    <h3>{prod.titulo}</h3>
                    <p>Precio: ${prod.precio * prod.cantidad}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                </div>
            ))}
            </div>
        

        {  
            carrito.length > 0 ?
            <>
                <h2 className='precio-total'>Precio total: ${precioTotal()}</h2>
                <button className='button vaciar-carrito' onClick={handleVaciar}>Vaciar</button>
            </> :
            <h2 className='carrito-vacio'>El carrito está vacío</h2>
        }
        <Link className='button finalizar-compra' to="/checkout">Finalizar compra</Link>
        
    </div>
)
}

export default Carrito