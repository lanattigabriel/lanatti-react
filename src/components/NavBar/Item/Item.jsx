import React from 'react';
import './item.scss';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const pathItem = `/detail/${item.id}`
    return(
        <div className="itemCard">
            <div className="itemCardInner">
                <h3>{item.name}</h3>
                <p>{item.descripcion}</p>
                <Link to={pathItem}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item;