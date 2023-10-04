import { useEffect, useState } from "react";
import {pedirDatos} from "../helpers/pedirDatos";
import ItemList from "./ItemList";


// ItemListContainer es el contenedor de todos nuestros productos


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })    
    }, [])
    
    

    return (
    <main>
    <div>
        <ItemList productos= {productos} />
    </div>
    </main>
    )
}

export default ItemListContainer