import { useEffect, useState } from "react"
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";



    const ItemDetailContainer = (ItemId) => {

    const [item, setItem] = useState(null);
    

    useEffect(() => {
        pedirItemPorId(ItemId)
            .then((res) =>{
                setItem(res);
            })
    }, [ItemId])


    return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
    )
    }

export default ItemDetailContainer