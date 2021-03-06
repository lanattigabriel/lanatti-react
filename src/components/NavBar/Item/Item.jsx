import React from 'react';
import './item.scss';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const pathItem = `/detail/${item.id}`
    return(
        <div className="itemCard">
            <div className="itemCardInner">
                <img src={item.imgUrl} alt={item.descripcion} />
                <h3>{item.name}</h3>
                <p>{item.descripcion}</p>
                <p>$ {item.precio}</p>
                <Link to={pathItem}>
                    <button className='button'>Ver detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;