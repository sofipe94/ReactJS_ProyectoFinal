import { useState, useContext } from "react"
import { CartContext } from "../../context/cartContext";
import CheckoutForm from "../checkoutForm/checkoutForm";
import { getDocs, collection, query, where, Timestamp, documentId, addDoc, writeBatch } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                Date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch (db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection (db, 'items')

            const productsAddedFromFiresotre = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            console.log(ids)

            const { docs } = productsAddedFromFiresotre

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                }else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que están fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se está generando su orden...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout