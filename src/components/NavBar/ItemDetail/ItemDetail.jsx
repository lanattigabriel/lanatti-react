import React from 'react';
import './itemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {

    const [cantidadProd, setCantidadProd] = useState(0);

    function onAdd(cantProd) {
        setCantidadProd(cantProd);
        alert(`Agregaste ${cantProd} items al carrito`)
    }

    return(
        <div className="itemDetail">
            <div className="itemDetailInner">
                <img className="itemDetailImg" src="" alt="imagen del producto" />
                <h3>{producto.name}</h3>
                <p>{producto.descripcion}</p>
                <p>El precio es de: ${producto.precio}</p>
            </div>

            {
                cantidadProd?
                <Link to={'/cart'}>Terminar compra</Link>
                :
                <ItemCount 
                    stock={producto.stock} 
                    initial={1} 
                    onAdd={onAdd}
                />
            }
        </div>
    )
}

export default ItemDetail;