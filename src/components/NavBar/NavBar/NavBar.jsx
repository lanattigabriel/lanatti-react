import React from 'react';
import './EstilosNavBar.scss';


function NavBar({children}) {
    return(
        <nav className="nav">
            <div className="logo">
                <h2 className="logo__title">Brand</h2>
            </div>
            <ul className="nav__ul">
                <li className="nav__li">
                    <a className="nav__a" href="/">Uno</a>
                </li>
                <li className="nav__li">
                    <a className="nav__a" href="/">Dos</a>
                </li>
                <li className="nav__li">
                    <a className="nav__a" href="/">Tres</a>
                </li>
            </ul>
        {children}
        </nav>
    )
}

export default NavBar