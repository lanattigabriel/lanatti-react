import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import './itemCount.scss'


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(1);

    function add(){
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    };

    function substract() {
        if (quantity > initial) {
            setQuantity(quantity - 1)
        }
    };

    return(
        <>
        <div className='counterContainer'>
            <p className='quantityCounter'>{quantity}</p>
            <button className='button' onClick={add}><FontAwesomeIcon icon={faPlusSquare}/></button>
            <button className='button' onClick={substract}><FontAwesomeIcon icon={faMinusSquare}/></button>
        </div>

        <div>
            <button className='button' onClick={() => onAdd(quantity)} >Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount;