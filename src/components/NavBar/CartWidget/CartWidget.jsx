// Estilos
import "./CartWidget.scss"

// Font Awesome Cart
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import useCartContext from '../Context/CartContext';


function CartWidget() {
    const { getQtyCart } = useCartContext();

    return(
        <div className="cartWidgetContainer">
            <FontAwesomeIcon icon={faShoppingCart} className="cart" />
            {getQtyCart() > 0 && 
                <div>
                    <p className="cartCount">{getQtyCart()}</p>
                </div>
            }
        </div>
        


    )
}


export default CartWidget;