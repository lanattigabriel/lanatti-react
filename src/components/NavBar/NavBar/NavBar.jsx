import React, { useState, useEffect } from 'react';
import './EstilosNavBar.scss';
import { Link } from 'react-router-dom';
// CartWidget
import CartWidget from "../CartWidget/CartWidget"
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { getCategories } from '../Products/Products'
import useCartContext from '../Context/CartContext';



const showList = () => {
    document.getElementsByClassName('categoriesLinkUl')[0].classList.toggle('visibility')
}


function NavBar() {

    const { itemsCart, getQtyCart } = useCartContext();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(categoriesOk => {
            setCategories(categoriesOk)
        })
    }, [])


    return(
        <nav className="nav">
            <div className="logo">
                <Link to={'/'} className="logo__title">Brand</Link>
            </div>
            <div className="navItems">
                <Link className="navItems__link" to={'/'}>List</Link>
                <div className="categories">
                    <button className='categories__title'>Categories</button>
                    <div className="categories__displayMenu">
                        <ul className='categoriesLinkUl'>
                            {
                                categories.map(cat => <li key={cat.id} className='categoriesLinkLi'>
                                                        <Link to={`/category/${cat.id}`} className='categoriesLink'>{cat.description}</Link>
                                                    </li>)
                            }
                        </ul>
                    </div>
                    <FontAwesomeIcon className='angle' icon={faAngleDown} style={{cursor:'pointer'}} onClick={showList}/>
                </div>
            </div>

            <div>
                { itemsCart.length > 0 &&
                    <Link to={'/Cart'}>
                        <CartWidget qty={getQtyCart()} />
                    </Link>
                }
            </div>
        </nav>
    )
}

export default NavBar