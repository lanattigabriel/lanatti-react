import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, initial}) => {
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

    function onAdd() {
        alert(`Agregaste ${cantidad} productos al carrito`)
    }

    return(
        <>
        <div>
            <p>{cantidad}</p>
            <button onClick={sumar}><FontAwesomeIcon icon={faPlusSquare}/></button>
            <button onClick={restar}><FontAwesomeIcon icon={faMinusSquare}/></button>
        </div>

        <div>
            <button onClick={onAdd} >Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount;