import React, { useState } from 'react';
import useCartContext from '../../../context/CartContext';
import Cart from './Cart'
import { Link } from 'react-router-dom';
import './cartContainer.scss'
import { db } from '../../../services/firebase/firebase'
import { getDoc, addDoc, doc, collection, writeBatch, Timestamp } from 'firebase/firestore';

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
    
    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
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

        const batch = writeBatch(db);
        const outOfStock = [];

        objOrder.item.forEach((item) => {
            getDoc(doc(db, 'productos', item.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= item.qty) {
                    batch.update(doc(db, 'productos', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - item.qty
                    })
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
                batch.commit().then(() => {
                    setOrderId(id)
                }).catch((error) => {
                    alert('Error ejecutando la orden')
                })
            })
        }
        
        console.log(itemsCart)
        setTimeout(() => {
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
                                <div className="formContainer">
                                    <form className='cartForm'>
                                        <label className='cartLabel' htmlFor="name">Nombre:</label>
                                        <input className='cartInput' type="text" id='name' name='name'  onChange={handleInputChange}/>
                                        <label className='cartLabel' htmlFor="phone">Teléfono:</label>
                                        <input className='cartInput' type="text" id='phone' name='phone' onChange={handleInputChange} />
                                        <label className='cartLabel' htmlFor="email">Email:</label>
                                        <input className='cartInput' type="email" id='email' name='email' onChange={handleInputChange} />
                                    </form>
                                </div>
                                {(!processingOrder 
                                    && itemsCart.length > 0
                                    && buyer.name !== '' 
                                    && buyer.phone !== '' 
                                    && buyer.email !== '') 
                                    && <button onClick={confirmOrder} className="buttonCart">Confirmar compra</button>} 
                                {(!processingOrder 
                                    && itemsCart.length > 0) 
                                    && <button onClick={clearCart} className="buttonCart">Vaciar carrito</button>}
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