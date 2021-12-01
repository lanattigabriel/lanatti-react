import React from 'react';

const ItemDetail = ({producto}) => {

    return(
        <div>
            <h3>{producto.id}</h3>
            <p>{producto.descipcion}</p>
        </div>
    )
}

export default ItemDetail;