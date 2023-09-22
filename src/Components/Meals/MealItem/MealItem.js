import React from "react";

function MealItem(props) {
    return (
        <li>
            <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
                <div class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2">
                    <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                        <h3 class="font-semibold text-lg leading-tight truncate">{props.name}</h3>
                        <p class="mt-2">{props.description}</p>
                        <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                            ${props.price.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </li>
    );
}

export default MealItem;