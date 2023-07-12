
const CartItem = ({ name, img, price, quantity, subtotal}) => {

    return (
        <div className="cart-container" >
            <ul>
            <li className="itemCart">
            <div>{name}</div>
            <picture>
                <img src={img} alt={name} className="image"/>
            </picture>
            <div>Precio por unidad: ${price}</div>
            <div>Cantidad: {quantity}</div>
            <div>Subtotal: ${subtotal}</div>
            </li>
            </ul>
            
        </div>
      );
}

export default CartItem


