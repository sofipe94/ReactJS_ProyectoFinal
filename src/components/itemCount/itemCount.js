import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if (quantity < stock){
            setQuantity (quantity + 1)
        }
    }

    const decrement = () =>{
        if (quantity > 1) {
            setQuantity (quantity - 1)
        }
    }


return (
    <div className='counter'>
        <div className='controls'>
            <button className='controlsButton' onClick={decrement}>-</button>
            <h3 className='controlsNumber'>{quantity}</h3>
            <button className='controlsButton' onClick={increment}>+</button>
        </div>
        <div className='buttonCart'>
            <button className='addCart' onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    </div>
)
}

export default ItemCount