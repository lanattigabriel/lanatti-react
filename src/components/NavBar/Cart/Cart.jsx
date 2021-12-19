import React from 'react';
import useCartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {

    const { itemsCart, removeItem } = useCartContext();
    console.log(itemsCart)


    return(
        <div className="cartContainer">
            <h1>Cart</h1>
            <div className="cartItems">
            {
                itemsCart !== []?
                    itemsCart.map( (item) =>
                        <div className="itemCard">
                            <div className="itemCardInner">
                                <h3>{item.name}</h3>
                                <p>{item.descripcion}</p>
                                <p>$ {item.precio}</p>
                                <p>Cantidad: {item.qty}</p>
                                <button onClick={() => {removeItem(item)}}>Quitar producto</button>
                            </div>
                        </div>
                    )
                
                    :
                    <>
                    <p>No hay items</p>
                    <Link to={'/'}>Volver a inicio</Link>
                    </>
            }
            </div>
        </div>
         
    )
}

export default Cart;