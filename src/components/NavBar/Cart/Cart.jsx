import React from 'react';
import useCartContext from '../Context/CartContext';
import './cart.scss';

const Cart = ({item}) => {
    
    const { removeItem } = useCartContext();
    
    return(
        <div className="itemCart">
            <div className="itemCartInner">
                <img className='cartImg' src={item.imgUrl} alt={item.descripcion} />
                <h3>{item.name}</h3>
                <p>{item.descripcion}</p>
                <p>${item.precio}</p>
                <p>Cantidad: {item.qty}</p>
                <span>Precio total: ${item.precio * item.qty}</span>
            </div>
            <button className='buttonCart' onClick={() => {removeItem(item)}}>Quitar producto</button>
        </div>
    )    
}

export default Cart;