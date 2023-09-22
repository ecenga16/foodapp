import React from "react";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;


    const cartItemHandeler = (item) => {

    };
    
    const cartItemRemoveHandeler = (id) => {

    };



    const cartItems = (
        <ul>
            {cartCtx.items.map(item => (  // Modify this line
                <CartItem   key={item.id} 
                            name={item.name} 
                            amount={item.amount} 
                            price={item.price} 
                            onRemove={cartItemRemoveHandeler}
                            onAdd={cartItemHandeler} 
                /> 
            ))}
        </ul>
    );

    return (
        <Modal onhideCart={props.onhideCart}>
            {cartItems}
            <div>
                <span>
                    Total Amount : {totalAmount}
                </span>
            </div>
            <div className="mt-4">
                <button className="bg-gray-300 text-gray-600 hover:bg-gray-400 px-4 py-2 rounded mr-2 transition-colors duration-300 ease-in-out" onClick={props.onhideCart}>
                    Close
                </button>
                {!hasItems && <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-300 ease-in-out">
                    Order
                </button>}
            </div>
        </Modal>
    );
};

export default Cart;
