import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './itemListContainer.scss';
import { useParams } from 'react-router-dom';
import { db } from '../../../services/firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = (props) => {
    
    const [item, setItem] = useState(null);
    const {categoryId} = useParams();
      
    useEffect(() => {
        if(!categoryId){
        getDocs(collection(db, 'productos')).then((querySnapshot) => {
            console.log(querySnapshot)
            const products = querySnapshot.docs.map(doc => {
                console.log(doc)
                return { id: doc.id, ...doc.data() } 
            })

            setItem(products)
        })
        } else(
            getDocs(query(collection(db, 'productos'), where('category', '==', categoryId))).then((querySnapshot) => {
                console.log(querySnapshot)
                const products = querySnapshot.docs.map(doc => {
                    console.log(doc)
                    return { id: doc.id, ...doc.data() } 
                })
    
                setItem(products)
            })
        )
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