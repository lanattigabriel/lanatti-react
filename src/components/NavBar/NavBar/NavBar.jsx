import React from 'react';
import './EstilosNavBar.scss';
import { Link } from 'react-router-dom';
// CartWidget
import CartWidget from "../CartWidget/CartWidget"


function NavBar() {
    return(
        <nav className="nav">
            <div className="logo">
                <Link to={'/'} className="logo__title">Brand</Link>
            </div>
            <div className="categories">
                <Link className="categories__link" to={'/'}>List</Link>
                <Link className="categories__link" to={'/detail'}>Detail</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar