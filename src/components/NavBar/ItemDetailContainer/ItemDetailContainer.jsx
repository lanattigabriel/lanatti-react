import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainer.scss';
import { productos } from '../Products/Products';


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