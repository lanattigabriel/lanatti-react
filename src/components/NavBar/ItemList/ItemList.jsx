import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items = []}) => {
    return(
        <div>
            {items.map((items, index) =>
                <Item key={index} nombre={items.nombre} descripcion={items.descripcion}/>
            )}            
        </div>
    )
};

export default ItemList;
