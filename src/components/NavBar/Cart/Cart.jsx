import React from 'react';
import useCartContext from '../Context/CartContext';
import './cart.scss';
// import { db } from '../../../services/firebase/firebase'
// import { addDoc, collection } from 'firebase/firestore';



const Cart = ({item}) => {

    // const [processingOrder, setProcessingOrder] = useState(false)
    // const [contact, setContact] = useState({
    //     name: '',
    //     phone: '',
    //     email: ''
    // })
    
    const { removeItem } = useCartContext();

    // const confirmOrder = () => {
    //     setProcessingOrder(true);
        
    //     const objOrder = {
    //         buyer: { name: 'Juan', phone: '111', email: 'juan@123.com' },
    //         item: [{item}],
    //         total: getQtyCart()
    //     }

    //     setTimeout(() => {
    //         clearCart()
    //         setProcessingOrder(false)
    //     }, 1000)

    //     addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
    //         console.log(id)
    //     })
    // }


    
    return(
        <div className="itemCart">
            <div className="itemCartInner">
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