import { useEffect, useState } from "react";
import {pedirDatos} from "../../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
                
            })    
    }, [])
    
    

    return (
    <>
    <div>
        <ItemList productos= {productos} />
    </div>
    </>
    )
}

export default ItemListContainer