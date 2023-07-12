import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return(
        <article className="card">
            <header>
                <h2 className="productTitle">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="productImage"/>
            </picture>
            <section>
                <p className="productDetails">Precio: ${price}</p>
                <p className="productDetails">Stock disponible: {stock}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className="productDetailButton">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item