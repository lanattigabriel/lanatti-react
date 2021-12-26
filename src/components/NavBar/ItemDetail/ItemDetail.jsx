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

    function onRemove(producto) {
        let itemRemoved = removeItem(producto)
        setCantidadProd(itemRemoved)
    }

    console.log(cantidadProd)


    return(
        <div className="itemDetail">
            <div className="itemDetailInner">
                <img className="itemDetailImg" src={producto.imgUrl} alt={producto.descripcion} />
                <h3>{producto.name}</h3>
                <p>{producto.descripcion}</p>
                <p>El precio es de: ${producto.precio}</p>
            </div>

            {
                cantidadProd?
                <>
                <Link to={'/cart'}>
                    <button className='botonCompra'>Terminar compra</button>
                </Link>
                <div>
                    <button className='botonCompra' onClick={() => {onRemove(producto)}}>Quitar producto</button>
                    <Link to={'/'}>
                        <button className='botonCompra'>Seguir comprando</button>
                    </Link>
                </div>
                </>
                :
                <ItemCount 
                    stock={producto.stock} 
                    initial={1} 
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            }
        </div>
    )
}

export default ItemDetail;