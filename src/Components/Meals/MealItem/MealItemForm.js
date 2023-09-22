import React, { useState } from "react";
import Input from "../../UI/Input";
import { useRef } from "react";

function MealItemForm(props) {

    const [amountisValid, setamountisValid] = useState(true);

    const amountInputRef = useRef();


    function submitEvent(event) {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 )
        {
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className="flex items-center mt-4" onSubmit={submitEvent}>
        <Input 
                ref={amountInputRef}
                label="Amount" input={{
                id:'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add
            </button>
            {!amountisValid&& <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
}

export default MealItemForm;