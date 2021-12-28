import React, { useState } from 'react';
import useCartContext from '../Context/CartContext';
import Cart from './Cart'
import { Link } from 'react-router-dom';
import './cartContainer.scss'
import { db } from '../../../services/firebase/firebase'
import { addDoc, collection, Timestamp } from 'firebase/firestore';

const CartContainer = () => {

    const { itemsCart, getQtyCart, clearCart } = useCartContext();
    const [processingOrder, setProcessingOrder] = useState(false);
    const [orderChecked, setOrderChecked] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target
        setBuyer(
            prevState => ({
                ...prevState,
                [name]: value
            })
        )
        console.log(buyer)

    }

    const confirmOrder = () => {
        setProcessingOrder(true);
        setOrderChecked(true);
        
        const objOrder = {
            buyer: {buyer},
            item: itemsCart,
            total: getQtyCart(),
            date: Timestamp.fromDate(new Date())
        }

        addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
            console.log(id)
            setOrderId(id)
        })
        
        console.log(itemsCart)
        setTimeout(() => {
            // clearCart()
            setProcessingOrder(false)
        }, 8000)

    }


    return(
        <div className='cartContainerBody'>
            <h1 className='cartContainerTitle'>Cart</h1>
            <div className="formContainer">
                <form className='cartForm' onSubmit={handleSubmit}>
                <label className='cartLabel' htmlFor="name">Nombre:</label>
                <input className='cartInput' type="text" id='name' name='name' />
                <label className='cartLabel' htmlFor="phone">Teléfono:</label>
                <input className='cartInput' type="text" id='phone' name='phone' />
                <label className='cartLabel' htmlFor="email">Email:</label>
                <input className='cartInput' type="email" id='email' name='email' />
                <input className='buttonCart' type="submit" />
            </form>
            </div>
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