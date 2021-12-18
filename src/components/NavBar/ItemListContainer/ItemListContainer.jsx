import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './itemListContainer.scss';
import { useParams } from 'react-router-dom';
import { productos } from '../Products/Products'

let crearPromesa = (category) => { 
    return new Promise((resolve) => {
        let productosFiltrados = []
        setTimeout(function() {
            category?
                productosFiltrados = productos.filter((producto) => producto.category === category)
                :
                productosFiltrados = [...productos]
                resolve(productosFiltrados)
        }, 2000);
    });
}


const ItemListContainer = (props) => {
    
    const [item, setItem] = useState(null);
    const {categoryId} = useParams();
    
    
    
    useEffect(() => {

        setItem(null);

        let llamarPromesa = crearPromesa(categoryId);

        llamarPromesa.then((datosObtenidos) => {
            setItem(datosObtenidos)
        }).finally(() => {
            console.log('Hecho')
        })
    }, [categoryId]);

    return(
        <section className="itemListContainer">
            <h1>{props.title}</h1>
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