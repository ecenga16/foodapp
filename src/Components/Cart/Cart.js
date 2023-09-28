import React, { useState, useContext, Fragment } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false); 
  const [isSubmited, setIsSubmited] = useState(false);
  const [didSubmit, setDidSubmit] = useState('');

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const submitHandlerData = async (userData) => {

    setIsSubmited(true);

    await fetch('https://foodapp-f5c04-default-rtdb.europe-west1.firebasedatabase.app/order.json', {
        method: 'Post',
        body: JSON.stringify({
            user:userData,
            orderedItems: cartCtx.items,
        })
    });
    setIsSubmited(false);
    setDidSubmit(true);
    cartCtx.clearCart();

  }

  const isSubmittingData = isSubmited && <p>Sending order data...</p>;

  const submittedSuccessfully = didSubmit && <p>Successfully sent the order!</p>;

  return (
    <Modal onhideCart={props.onhideCart}>
      {isSubmited ? (
        <Fragment>
          {isSubmittingData}
          <div className="mt-4">
            <button
              className="bg-gray-300 text-gray-600 hover:bg-gray-400 px-4 py-2 rounded mr-2 transition-colors duration-300 ease-in-out"
              onClick={props.onhideCart}
            >
              Close
            </button>
          </div>
        </Fragment>
      ) : didSubmit ? (
        <Fragment>
          {submittedSuccessfully}
          <div className="mt-4">
            <button
              className="bg-gray-300 text-gray-600 hover:bg-gray-400 px-4 py-2 rounded mr-2 transition-colors duration-300 ease-in-out"
              onClick={props.onhideCart}
            >
              Close
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {cartItems}
          <div>
            <span>Total Amount : {totalAmount}</span>
          </div>
          <div className="mt-4">
            <button
              className="bg-gray-300 text-gray-600 hover:bg-gray-400 px-4 py-2 rounded mr-2 transition-colors duration-300 ease-in-out"
              onClick={props.onhideCart}
            >
              Close
            </button>
            {hasItems && (
              <button
                onClick={orderHandler}
                className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-300 ease-in-out"
              >
                Order
              </button>
            )}
          </div>
          {isCheckout && <Checkout onConfirm={submitHandlerData} onCancel={() => setIsCheckout(false)} />}
        </Fragment>
      )}
    </Modal>
  );
}

export default Cart;