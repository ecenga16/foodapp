import React from "react";
import Input from "../../UI/Input";

function MealItemForm(props) {
    return (
        <form className="flex items-center mt-4">
            <Input label="Amount" input={{
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
        </form>
    );
}

export default MealItemForm;