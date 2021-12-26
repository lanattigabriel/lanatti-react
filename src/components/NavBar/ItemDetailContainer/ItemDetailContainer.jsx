import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainer.scss';
import { db } from '../../../services/firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getDoc(doc(db, 'productos', id)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setProducto(product)
        })
    }, [id]);

    return(
        <section className="itemDetailContainer">
            <div>
                {
                    producto ?
                    <ItemDetail producto={producto} />
                    :
                    <div className="cargandoContainer">
                        <span className="cargando">Cargando...</span>
                    </div>
                }
            </div>
        </section>
    )
}

export default ItemDetailContainer;