import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <span>{item.quantity} x ${item.price}</span>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;