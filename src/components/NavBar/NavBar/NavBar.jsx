import React from 'react';
import './EstilosNavBar.scss';
import { Link } from 'react-router-dom';
// CartWidget
import CartWidget from "../CartWidget/CartWidget"
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const showList = () => {
    document.getElementsByClassName('categoriesLinkUl')[0].classList.toggle('visibility')
}


function NavBar() {
    return(
        <nav className="nav">
            <div className="logo">
                <Link to={'/'} className="logo__title">Brand</Link>
            </div>
            <div className="navItems">
                <Link className="navItems__link" to={'/'}>List</Link>
                <Link className="navItems__link" to={'/detail'}>Detail</Link>
                <button className='categories__button'>Categories</button>
                <ul className='categoriesLinkUl'>
                    <li className='categoriesLinkLi'>
                        <Link className='categoriesLink' to={'/category/1'}>Categoría 1</Link>
                    </li>
                    <li className='categoriesLinkLi'>
                        <Link className='categoriesLink' to={'/category/2'}>Categoría 2</Link>
                    </li>
                </ul>
            </div>
            <FontAwesomeIcon className='angle' icon={faAngleDown} style={{cursor:'pointer'}} onClick={showList}/>
            <CartWidget />
        </nav>
    )
}

export default NavBar