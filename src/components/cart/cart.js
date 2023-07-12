import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from '../cartItem/cartItem';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity ===0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="button">Productos</Link>
            </div>
        )
    }
    const calculateSubtotal = (quantity, price) => {
        return quantity * price;
      };

    return (
        <div className="cart">
            { cart.map(p => <CartItem key={p.id} quantity={p.quantity} subtotal={calculateSubtotal(p.quantity, p.price)} {...p}/>)}
            <div className="cartOptions">
            <h3 className="total">Total: ${total}</h3>
            <button onClick={() => clearCart()} className="button">Limpiar carrito</button>
            <Link to='/checkout' className="button">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart