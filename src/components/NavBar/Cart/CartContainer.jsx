import React, { useState } from 'react';
import useCartContext from '../Context/CartContext';
import Cart from './Cart'
// import { Link } from 'react-router-dom';
import './cartContainer.scss'
import { db } from '../../../services/firebase/firebase'
import { addDoc, collection } from 'firebase/firestore';

const CartContainer = () => {

    const { itemsCart, getQtyCart, clearCart } = useCartContext();
    const [processingOrder, setProcessingOrder] = useState(false)

    const confirmOrder = () => {
        setProcessingOrder(true);
        
        const objOrder = {
            buyer: { name: 'Juan', phone: '111', email: 'juan@123.com' },
            item: [{itemsCart}],
            total: getQtyCart()
        }
        
        addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
            console.log(id)
        })
        
        setTimeout(() => {
            clearCart()
            setProcessingOrder(false)
        }, 100)

    }

    // if (!processingOrder && itemsCart.length > 0) {
    //     return(
    //         <div className="cartContainer">
    //             <div>
    //             {
    //                 itemsCart.map( (item) => (
    //                     <Cart key={item.id} item={item} />
    //                 )
    //             )}
    //             <button onClick={confirmOrder()} className="buttonCart">Confirmar compra</button>
    //             <button onClick={clearCart}>Vaciar carrito</button>
    //             </div>
    //         </div>
    //     )
            
    // }
    // else return(
    //         <>
    //             <h1>Cart</h1>
    //             <p>No hay items</p>
    //             <Link to={'/'}>
    //                 <button>Volver a inicio</button>
    //             </Link>
    //         </>
    //     )

    return(
        <div>
            <h1>Cart</h1>
            {
                !processingOrder && itemsCart.length > 0
                    ?
                    itemsCart.map( item => <Cart key={item.id} item={item} /> )
                    : 'Procesando Orden'
            }
            {(itemsCart.length > 0 && !processingOrder) && <h3>Total: ${getQtyCart()}</h3>}
            {(!processingOrder && itemsCart.length > 0) && <button onClick={confirmOrder()} className="buttonCart">Confirmar compra</button>} 
            {(!processingOrder && itemsCart.length > 0) && <button onClick={clearCart()} className="buttonCart">Vaciar carrito</button>}
        </div>
    )

}

export default CartContainer;