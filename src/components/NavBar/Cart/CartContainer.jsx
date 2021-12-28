import React, { useState } from 'react';
import useCartContext from '../Context/CartContext';
import Cart from './Cart'
import { Link } from 'react-router-dom';
import './cartContainer.scss'
import { db } from '../../../services/firebase/firebase'
import { addDoc, collection } from 'firebase/firestore';

const CartContainer = () => {

    const { itemsCart, getQtyCart, clearCart } = useCartContext();
    const [processingOrder, setProcessingOrder] = useState(false);
    const [orderChecked, setOrderChecked] = useState(false);
    const [orderId, setOrderId] = useState('');
    
    const confirmOrder = () => {
        setProcessingOrder(true);
        setOrderChecked(true);
        
        const objOrder = {
            buyer: { name: 'Juan', phone: '111', email: 'juan@123.com' },
            item: itemsCart,
            total: getQtyCart()
        }
        
        // function prueba (id){
        //     console.log('id prueba')
        //     console.log(id)
        //     console.log('id prueba')
        //    getDoc(doc(db, 'orders', id)).then((querySnapshot) => {
        //        console.log(querySnapshot)
        //        const orderId = {querySnapshot}
        //        setOrderId(orderId)
        //    })
        // }

        addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
            console.log(id)
            setOrderId(id)
        //    prueba(id) 
        })

        // setTimeout(() => {
            // function prueba (id){
            //     console.log(id)
            //    getDoc(doc(db, 'orders', id)).then((querySnapshot) => {
            //        console.log(querySnapshot)
            //        const orderId = {querySnapshot}
            //        setOrderId(orderId)
            //    })
            // }
         
        // }, 500)
        
        console.log(itemsCart)
        setTimeout(() => {
            // clearCart()
            setProcessingOrder(false)
        }, 8000)

    }

    return(
        <div className='cartContainerBody'>
            <h1 className='cartContainerTitle'>Cart</h1>
            <div className="cartContainer">
                { itemsCart.length > 0 
                    ?
                    <div>
                       { !orderChecked?
                            <div>
                                {
                                    !processingOrder
                                        ?
                                        itemsCart.map( item => <Cart key={item.id} item={item} /> )
                                        : 'Procesando Orden'
                                }
                                {/* {(itemsCart.length > 0 && !processingOrder) && <h3>Total: ${getQtyCart() * itemsCart.item.precio}</h3>} */}
                                {(!processingOrder && itemsCart.length > 0) && <button onClick={confirmOrder} className="buttonCart">Confirmar compra</button>} 
                                {(!processingOrder && itemsCart.length > 0) && <button onClick={clearCart} className="buttonCart">Vaciar carrito</button>}
                            </div>
                            :
                            <div>
                                <h1 className='compraExitosa'>Compra exitosa</h1>
                                <span className='orderNum'>Nro de orden: {orderId}</span>
                            </div>
                        }
                    </div>
                    :
                    <div>
                        <p className='noItems'>No hay items</p>
                        <Link to={'/'}>
                            <button className='buttonCart'>Volver a inicio</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )

}

export default CartContainer;