import React from 'react';
import useCartContext from '../Context/CartContext';
import './cart.scss';
import { db } from '../../../services/firebase/firebase'
import { addDoc, collection } from 'firebase/firestore';



const Cart = ({item}) => {
    
    const { removeItem, getQtyCart } = useCartContext();

    const objOrder = {
        buyer: { name: 'Juan', phone: '111', email: 'juan@123.com' },
        item: [{item}],
        total: getQtyCart()
    }

    addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
        console.log(id)
    })
    
    return(
        <div className="itemCart">
            <div className="itemCartInner">
                <h3>{item.name}</h3>
                <p>{item.descripcion}</p>
                <p>${item.precio}</p>
                <p>Cantidad: {item.qty}</p>
                <span>Precio total: ${item.precio * item.qty}</span>
            </div>
            <form>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="phone">Telefono:</label>
                <input type="text" name="phone" id="phone" />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
                <input className="buttonCart" type="submit" id="submit" />
            </form>
            <button className='buttonCart' onClick={() => {removeItem(item)}}>Quitar producto</button>
            <button className="buttonCart">Confirmar compra</button>
        </div>
    )    
}

export default Cart;