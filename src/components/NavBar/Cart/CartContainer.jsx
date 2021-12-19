import React from 'react';
import useCartContext from '../Context/CartContext';
import Cart from './Cart'
import { Link } from 'react-router-dom';
import './cartContainer.scss'

const CartContainer = () => {

    const { itemsCart, clearCart } = useCartContext();

    if (itemsCart.length === 0) {
        return(
            <>
            <h1>Cart</h1>
            <p>No hay items</p>
            <Link to={'/'}>
                <button>Volver a inicio</button>
            </Link>
            </>
        )
            
    }
    else return(
        <div className="cartContainer">
                <div>
                {
                    itemsCart.map( (item) => (
                        <Cart key={item.id} item={item} />
                    )
                )}
                <button onClick={clearCart}>Vaciar carrito</button>
                </div>
            </div>
            )
}

export default CartContainer;