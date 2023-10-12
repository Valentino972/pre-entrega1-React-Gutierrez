import nike1 from "../../imagenes/botines-nike-celeste.jpg";
import nike2 from "../../imagenes/botines-nike-gris.jpg";
import nike3 from "../../imagenes/botines-nike-negro.jpg";
import nike4 from "../../imagenes/botines-nike-multi.jpg";
import adidas1 from "../../imagenes/botines-adidas-azul.jpg";
import adidas2 from "../../imagenes/botines-adidas-blanco.jpg";
import adidas3 from "../../imagenes/botines-adidas-negro.jpg";
import adidas4 from "../../imagenes/botines-adidas-rojo.jpg";
import puma1 from "../../imagenes/botines-puma-blanco.jpg"
import puma2 from "../../imagenes/botines-puma-negro.jpg";
import puma3 from "../../imagenes/botines-puma-negro.jpg";
import puma4 from "../../imagenes/botines-puma-negro.jpg";
import { Link } from "react-router-dom";



const imagenesPorCategoria = {
    Nike: {
        1: nike1,
        2: nike2,
        3: nike3,
        4: nike4,
    },
    Adidas: {
        5: adidas1,
        6: adidas2,
        7: adidas3,
        8: adidas4,
    },
    Puma: {
        9: puma1,
        10: puma2,
        11: puma3,
        12: puma4,
    },
};


const Item = ({ producto }) => {

    const imagen = imagenesPorCategoria[producto.categoria]?.[producto.id] || null;

    return (
        <main>
        <div className="producto-container">
            <div className="producto-card">
                <img src={imagen} alt={producto.titulo} />
            </div>
            <div>
                <h4>{producto.titulo}</h4>
                <p>Precio: {producto.precio}</p>
                <p>Categoría: {producto.categoria}</p>
                <Link to={`/item/${producto.id}`} className="btn-prod">Ver más</Link>
            </div>
        </div>
        </main>
    );
}

export default Item;

