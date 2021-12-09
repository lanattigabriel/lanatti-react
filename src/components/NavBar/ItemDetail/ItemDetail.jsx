import React from 'react';
import './itemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {

    return(
        <div className="itemDetail">
            <div className="itemDetailInner">
                <img className="itemDetailImg" src="" alt="imagen del producto" />
                <h3>{producto.name}</h3>
                <p>{producto.descripcion}</p>
                <p>El precio es de: ${producto.precio}</p>
            </div>
            <ItemCount stock={producto.stock} initial={1} />
        </div>
    )
}

export default ItemDetail;