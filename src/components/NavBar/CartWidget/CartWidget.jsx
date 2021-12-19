// Estilos
import "./CartWidget.scss"

// Font Awesome Cart
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function CartWidget({qty = 0}) {

    return(
        <div className="cartWidgetContainer">
            <FontAwesomeIcon icon={faShoppingCart} className="cart" /> 
            <div>
                <p className="cartCount">{qty}</p>
            </div>
        </div>
        


    )
}


export default CartWidget;