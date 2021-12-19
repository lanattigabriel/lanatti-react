import React from 'react';
import useCartContext from '../Context/CartContext';
import './cart.scss'


const Cart = ({item}) => {

    const { removeItem } = useCartContext();

    return(
        <div className="itemCart">
            <div className="itemCartInner">
                <h3>{item.name}</h3>
                <p>{item.descripcion}</p>
                <p>${item.precio}</p>
                <p>Cantidad: {item.qty}</p>
                <span>Precio total: ${item.precio * item.qty}</span>
            </div>
            <button onClick={() => {removeItem(item)}}>Quitar producto</button>
        </div>
    )    
}

export default Cart;