import { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    console.log (cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        }else {
            console.error ('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter (prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = cart.reduce (
        (acc, curr) => acc + curr.quantity * curr.price,
        0
    )

    const totalQuantity = cart.reduce (
        (acc, curr) =>{
            return acc + curr.quantity;
        }, 0)
    

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}