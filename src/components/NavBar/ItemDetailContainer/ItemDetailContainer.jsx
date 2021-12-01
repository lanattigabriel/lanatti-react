import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetal/ItemDetail';

const productos = [
    {id: 1, name: 'Primer producto', descripcion: 'Este es el primer producto'},
    {id: 2, name: 'Segundo producto', descripcion: 'Este es el segundo producto'},
    {id: 3, name: 'Tercer producto', descripcion: 'Este es el tercer producto'},
    {id: 4, name: 'Cuarto producto', descripcion: 'Este es el cuarto producto'},
    {id: 5, name: 'Quinto producto', descripcion: 'Este es el quinto producto'},
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

const ItemDetailContainer = ({prodId = 1}) => {

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        let llamarPromesa = crearPromesa({prodId});

        llamarPromesa.then((resuelve) => {
            setProducto(resuelve)
        }).catch((noResuelve) => {
            console.log(noResuelve)
        }).finally(() => {
            console.log('Promesa finalizada')
        })
    }, [prodId]);

    return(
        <section>
            <div>
                {
                    producto !== null ?
                    <ItemDetail producto={producto} />
                    :
                    <span>CARGANDO...</span>
                }
            </div>
        </section>
    )
}

export default ItemDetailContainer;