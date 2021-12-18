import React, { useState } from 'react';
import './itemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import useCartContext from '../Context/CartContext';

const ItemDetail = ( {producto} ) => {

    const [cantidadProd, setCantidadProd] = useState(0);
    const { addItem, removeItem } = useCartContext();

    function onAdd(qty) {
        setCantidadProd(qty);
        addItem(producto, qty);
        alert(`Agregaste ${qty} items al carrito`);
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
                <>
                <Link to={'/cart'}>Terminar compra</Link>
                <button onClick={removeItem(producto.id)}>Quitar producto</button>
                </>
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