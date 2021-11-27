import React from 'react';

const Item = ({item}) => {
    return(
        <div>
            <h3>{item.name}</h3>
            <p>{item.descripcion}</p>
        </div>
    )
}

export default Item;