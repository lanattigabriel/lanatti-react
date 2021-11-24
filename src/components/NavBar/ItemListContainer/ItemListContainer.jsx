import React from 'react';
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = (props) => {
    return(
        <section className="itemListContainer">
            <h1>{props.greeting}</h1>
            <ItemCount stock={10} initial={1} />
        </section>
    )
}

export default ItemListContainer;