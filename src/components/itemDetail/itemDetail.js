import { useContext, useState } from "react";
import ItemCount from "../itemCount/itemCount";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)

        const item = {
            id, name, price
        }

        addItem (item, quantity)
    }

    return (
        <article className="card">
            <header>
                <h2 className="productTitle">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="productImage"/>
            </picture>
            <section>
                <p className="productDetails">Categoría: {category}</p>
                <p className="productDetails">Descripción: {description}</p>
                <p className="productDetails">Precio: ${price}</p>
            </section>
            <footer className="footerProductDetails">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="endCart">Terminar compra</Link>
                    ): (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail