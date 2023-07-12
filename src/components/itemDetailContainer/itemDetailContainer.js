import { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/itemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams ()

    
    useEffect (() => {
        setLoading(true)
    
        const docRef = doc(db, 'items', itemId)
    
        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        }, [itemId])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer