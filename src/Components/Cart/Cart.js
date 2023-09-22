import React from "react";
import Modal from "../UI/Modal";

function Cart(props) {
    const cartData = [
        { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
    ];

    const cartItems = (
        <ul>
            {cartData.map(item => (
                <li key={item.id}>
                    {item.name} - x{item.amount} - ${item.price.toFixed(2)}
                </li>
            ))}
        </ul>
    );

    return (
        <Modal onhideCart={props.onhideCart}>
            {cartItems}
            <div>
                <span>
                    Total Amount
                </span>
                <span>
                    44.53
                </span>
            </div>
            <div className="mt-4">
                <button className="bg-gray-300 text-gray-600 hover:bg-gray-400 px-4 py-2 rounded mr-2 transition-colors duration-300 ease-in-out" onClick={props.onhideCart}>Close</button>
                <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-300 ease-in-out">Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
