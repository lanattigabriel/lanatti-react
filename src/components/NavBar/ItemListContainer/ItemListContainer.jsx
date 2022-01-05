import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './itemListContainer.scss';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../../services/firebase/firebase';


const ItemListContainer = (props) => {
    
    const [item, setItem] = useState(null);
    const { categoryId } = useParams();
      
    useEffect(() => {

        getProducts('category', '==', categoryId).then(products => {
            setItem(products)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId]);

    return(
        <section className="itemListContainer">
            <h1 className='listTitle'>{props.title}</h1>
            <div>
                {
                    item ? 
                    <ItemList item={item} />
                    :
                    <div className="cargandoContainer">
                        <span className="cargando">Cargando...</span>
                    </div>
                }
            </div>
        </section>
    )
}

export default ItemListContainer;