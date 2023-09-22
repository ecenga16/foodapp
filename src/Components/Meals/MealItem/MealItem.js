import React from "react";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

function MealItem(props) {

    useContext(CartContext);

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {

        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })

    }
    return (
        <li>
            <div className="container w-full lg:w-4/5 mx-auto flex flex-col">
                <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-full mx-2">
                    
                    {/* Meal Details */}
                    <div className="flex-1 py-4 px-6 text-gray-800 flex flex-col justify-between">
                        <h3 className="font-semibold text-lg leading-tight truncate">{props.name}</h3>
                        <p className="mt-2">{props.description}</p>
                        <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                            ${props.price.toFixed(2)}
                        </p>
                    </div>
                    
                    {/* Meal Form */}
                    <div className="md:w-1/3 pb-4 px-6 flex items-right">
                        <MealItemForm onAddToCart={addToCartHandler} />
                    </div>

                </div>
            </div>
        </li>
    );
}

export default MealItem;
