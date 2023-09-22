import React from "react";

function Input (props) {

    return (
        <div>
            <label htmlFor={props.input.id}>{props.name}</label>
            <input  className="w-20 p-2 border rounded-md mr-4"
                    id={props.input.id} 
                    {...props.input}/>
        </div>
    );


};

export default Input;