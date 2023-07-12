import Item from "../item/item"

const ItemList = ({products}) => {
    return(
        <div className="itemList">
            {products.map (p => <Item key={p.id} {...p}/>)}
        </div>
    )
}

export default ItemList