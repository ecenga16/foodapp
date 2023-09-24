import React from "react";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;


    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
      };



    const cartItems = (
        <ul>
            {cartCtx.items.map(item => (  
                <CartItem   key={item.id} 
                            name={item.name} 
                            amount={item.amount} 
                            price={item.price} 
                            onRemove={cartItemRemoveHandler.bind(null, item.id)}
                            onAdd={cartItemAddHandler.bind(null, item)}
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
