import React from "react";  
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function ButtonHeaderCart(props) {

   const cartCtx = useContext(CartContext);

   const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
        return currentNum + item.amount;
   }, 0);

    return (
        <button class="group border-2 border-white rounded-xl p-0.5 inline-flex items-center pr-2 hover:bg-slate-100 hover:text-slate-600 hover:border-slate-600" onClick={props.onClickCartButton}>
            <CartIcon/>
            <span>Cart</span>
            <span class="ml-2 px-2 border-2 rounded-full group-hover:border-white group-hover:bg-slate-600 group-hover:text-white">
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default ButtonHeaderCart;