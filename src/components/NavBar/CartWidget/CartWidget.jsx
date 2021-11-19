// Estilos
import "./CartWidget.scss"

// Font Awesome Cart
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function cartIcon() {
    return(

    <FontAwesomeIcon icon={faShoppingCart} className="cart" />

    )
}


export default cartIcon;