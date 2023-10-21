import React, { useState } from 'react'
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
import ItemCount from './ItemCount';




    const ItemDetail = ({item}) => {

        const imagenesPorCategoria2 = {
            nike: {
                1: nike1,
                2: nike2,
                3: nike3,
                4: nike4,
            },
            adidas: {
                5: adidas1,
                6: adidas2,
                7: adidas3,
                8: adidas4,
            },
            puma: {
                9: puma1,
                10: puma2,
                11: puma3,
                12: puma4,
            },
        }

        const imagenes = imagenesPorCategoria2[item.categoria]?.[item.id]|| null;

        // Logica del ItemCount
        const [cantidad, setCantidad] = useState(1);

        const handleRestar = () => {
            cantidad > 1 && setCantidad(cantidad -1)
        }

        const handleSumar = () => {
            cantidad < item.stock && setCantidad(cantidad + 1)
        }

        const handleAgregar = () => {
            console.log(item)
        }


    return (
        <div className='container'>
            <div className='producto-detalle'>
                <div className="container-imagen">
                    <img className='imagen' src={imagenes} alt={item.titulo} />
                </div>
                <div className='detalle-der'>
                    <h3 className="titulo"> {item.titulo} </h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoria: {item.categoria}</p>
                    <p className="precio">{item.precio}</p>
                    <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar}/>
                </div>
            </div>
        </div>
    )
    }

    export default ItemDetail