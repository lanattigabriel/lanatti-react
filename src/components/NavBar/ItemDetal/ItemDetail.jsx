import React from 'react';

const ItemDetail = ({producto}) => {

    return(
        <div>
            <img width="5px" height="5px" src="" alt="" />
            <h3>{producto.name}</h3>
            <p>{producto.descripcion}</p>
        </div>
    )
}

export default ItemDetail;