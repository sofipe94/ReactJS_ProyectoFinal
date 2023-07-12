import cart from './assets/cart.png';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className="carrito" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={cart} alt="cart-widget"></img>
            <span className='cartItemsNumb'>
            { totalQuantity }
            </span>
        </Link>
    )
}

export default CartWidget