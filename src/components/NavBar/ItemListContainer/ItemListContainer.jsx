import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './itemListContainer.scss';
import { useParams } from 'react-router-dom';

const productos = [
    {id: 1, name: 'Primer producto', descripcion: 'Este es el primer producto', category: '1'},
    {id: 2, name: 'Segundo producto', descripcion: 'Este es el segundo producto', category: '1'},
    {id: 3, name: 'Tercer producto', descripcion: 'Este es el tercer producto', category: '1'},
    {id: 4, name: 'Cuarto producto', descripcion: 'Este es el cuarto producto', category: '2'},
    {id: 5, name: 'Quinto producto', descripcion: 'Este es el quinto producto', category: '2'},
]

// let crearPromesa = (category) => { 
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             // const datosObtenidos = true;
//             if(category) {
//                 resolve(productos)
//             }else{
//                 reject('Datos no obtenidos')
//             }
//         }, 2000);
//     });
// }

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
        
        // const getProductsByCategory = () => {
            // productos.filter((producto) => {
            //     return producto.category === categoryId
            // }
        // )}
            
        // console.log(productos[0].category)
        // console.log(categoryId);

        // if (categoryId){
    
        //     // Acá hay un error ya que el console.log(productosCategorizados) devuelve undefined.
        //     const productosCategorizados = getProductsByCategory(categoryId);
        //     console.log(productosCategorizados)
        //     setItem(productosCategorizados)

        // } else {
        //     setItem(productos)
        // }

        // ( async () => {
        //     if (categoryId !== undefined){
    
        //         const productosCategorizados = await getProductsByCategory(categoryId);
        //         console.log(productosCategorizados)
        //         setItem(productosCategorizados)
    
        //     } else {
        //         setItem(productos)
        //     }

        // })()

        setItem(null);

        let llamarPromesa = crearPromesa(categoryId);

        llamarPromesa.then((datosObtenidos) => {
            setItem(datosObtenidos)
            console.log(datosObtenidos)
        }).finally(() => {
            console.log('Hecho')
        })
    }, [categoryId]);

    console.log(item)

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