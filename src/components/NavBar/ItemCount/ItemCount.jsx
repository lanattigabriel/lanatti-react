import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import './itemCount.scss'


const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(1);

    function sumar(){
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    };

    function restar() {
        if (cantidad > initial) {
            setCantidad(cantidad - 1)
        }
    };

    return(
        <>
        <div className='counterContainer'>
            <p className='cantidadCounter'>{cantidad}</p>
            <button className='button' onClick={sumar}><FontAwesomeIcon icon={faPlusSquare}/></button>
            <button className='button' onClick={restar}><FontAwesomeIcon icon={faMinusSquare}/></button>
        </div>

        <div>
            <button className='button' onClick={() => onAdd(cantidad)} >Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount;