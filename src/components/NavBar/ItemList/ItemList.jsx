import React from 'react';
import Item from '../Item/Item';
import './itemList.scss'

const ItemList = ({item = []}) => {
    return(
        <div className="itemList">
            {item.map((item, index) =>
                <Item key={index} item={item}/>
            )}            
        </div>
    )
};

export default ItemList;
