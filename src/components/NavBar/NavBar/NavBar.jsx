import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
// CartWidget
import CartWidget from "../CartWidget/CartWidget"
import useCartContext from '../../../context/CartContext';
import { db } from '../../../services/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';



function NavBar() {

    const { itemsCart, getQtyCart } = useCartContext();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'categories')).then((querySnapshot) => {
            const categories = querySnapshot.docs.map(doc => {
                return{ id: doc.id, ...doc.data() }
            })
            setCategories(categories)
        })
    }, [])


    return(
        <>
        <nav className="nav">

            <div className="logo">
                <Link to={'/'} className="logo__title">Brand</Link>
            </div>

            <div className="navItems">
                <Link className="navItems__link" to={'/'}>Lista</Link>
                {
                    categories.map(cat => <li className='navItems__li' key={cat.id}>
                                                <Link to={`/category/${cat.id}`} className='navItems__link'>{cat.description}</Link>
                                            </li>)
                }
            </div>

            <div>
                { itemsCart.length > 0 &&
                    <Link to={'/Cart'}>
                        <CartWidget qty={getQtyCart()} />
                    </Link>
                }
            </div>
        </nav>
    </>
    )
}

export default NavBar