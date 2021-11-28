import React from 'react';
import './item.scss'

const Item = ({item}) => {
    return(
        <div className="itemCard">
            <div className="itemCardInner">
                <h3>{item.name}</h3>
                <p>{item.descripcion}</p>
            </div>
        </div>
    )
}

export default Item;