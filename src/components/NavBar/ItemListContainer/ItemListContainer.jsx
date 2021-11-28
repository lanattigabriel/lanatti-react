import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './itemListContainer.scss';

const productos = [
    {id: 1, name: 'Primer producto', descripcion: 'Este es el primer producto'},
    {id: 2, name: 'Segundo producto', descripcion: 'Este es el segundo producto'},
    {id: 3, name: 'Tercer producto', descripcion: 'Este es el tercer producto'},
    {id: 4, name: 'Cuarto producto', descripcion: 'Este es el cuarto producto'},
    {id: 5, name: 'Quinto producto', descripcion: 'Este es el quinto producto'},
]

let crearPromesa = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const datosObtenidos = true;
            if(datosObtenidos) {
                resolve(productos)
            }else{
                reject('Datos no obtenidos')
            }
        }, 2000);
    });
}

const ItemListContainer = (props) => {

    const [item, setItem] = useState([]);

    useEffect(() => {

        let llamarPromesa = crearPromesa();

        llamarPromesa.then((datosObtenidos) => {
            setItem(datosObtenidos)
            console.log(datosObtenidos)
        }).catch((datosNoObtenidos) => {
            console.log(datosNoObtenidos)
        }).finally(() => {
            console.log('Hecho')
        })
    }, []);

    return(
        <section className="itemListContainer">
            <h1>{props.greeting}</h1>
            <ItemCount stock={10} initial={1} />
            <ItemList item={item} />
        </section>
    )
}

export default ItemListContainer;