import { db } from "../../firebase/config";
import { Link } from "react-router-dom";





const Item = ({ producto }) => {

    return (
        <main>
        <div className="producto-container">
            <div className="producto-card">
            </div>
            <div>
                <img src={producto.img} alt={producto.titulo} />
                <h4>{producto.titulo}</h4>
                <p>Precio: {producto.precio}</p>
                <p>Categoría: {producto.categoria}</p>
                <Link className="button" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
        </main>
    );
}

export default Item ;

