import React from 'react';

const ItemDetail = ({producto}) => {

    return(
        <div>
            <h3>{producto.name}</h3>
            <p>{producto.descipcion}</p>
        </div>
    )
}

export default ItemDetail;