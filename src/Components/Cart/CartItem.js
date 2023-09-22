import React from "react";

function CartItem(props) {
    const totalPrice = props.price * props.amount;

    return (
        <li>
            <div className="container w-full lg:w-4/5 mx-auto flex flex-col">
                <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-full mx-2">
                    
                    {/* Item Details */}
                    <div className="flex-1 py-4 px-6 text-gray-800 flex flex-col justify-between">
                        <h3 className="font-semibold text-lg leading-tight truncate">{props.name}</h3>
                        
                        <div className="flex justify-between mt-2">
                            <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold">
                                ${props.price.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-700">
                                x{props.amount}
                            </p>
                        </div>

                        <div className="flex justify-end mt-2">
                            <p className="text-sm text-gray-900">
                                Total: ${totalPrice.toFixed(2)}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </li>
    );
}

export default CartItem;
