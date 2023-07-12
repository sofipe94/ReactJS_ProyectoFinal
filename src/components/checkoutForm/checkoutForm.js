import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="checkoutForm">
            <form onSubmit={handleConfirm} className="form">
                <label className="labels">
                    Nombre
                    <input
                    className=""
                    type="text"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    />
                </label>
                <label className="labels">
                    Teléfono
                    <input
                    className=""
                    type="text"
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                    />
                </label>
                <label className="labels"> 
                    Email
                    <input
                    className=""
                    type="email"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <div>
                    <button type='submit' className="button">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm