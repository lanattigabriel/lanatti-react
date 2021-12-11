import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainer.scss';

const productos = [
    {id: 1, name: 'Primer producto', descripcion: 'Este es el primer producto', precio: 200, stock: 5},
    {id: 2, name: 'Segundo producto', descripcion: 'Este es el segundo producto', precio: 200, stock: 15},
    {id: 3, name: 'Tercer producto', descripcion: 'Este es el tercer producto', precio: 200, stock: 10},
    {id: 4, name: 'Cuarto producto', descripcion: 'Este es el cuarto producto', precio: 200, stock: 5},
    {id: 5, name: 'Quinto producto', descripcion: 'Este es el quinto producto', precio: 200, stock: 5},
]

const crearPromesa = (idProductoElegido) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoElegido = productos.find((producto) => {
                return producto.id === idProductoElegido
            });

            productoElegido
                ? resolve(productoElegido)
                : reject ('No se encuentra el producto')
        }, 500);
    });
};

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        let llamarPromesa = crearPromesa(Number(id));

        llamarPromesa.then((resuelve) => {
            setProducto(resuelve)
        }).catch((noResuelve) => {
            console.log(noResuelve)
        }).finally(() => {
            console.log('Promesa finalizada')
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