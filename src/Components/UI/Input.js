import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div>
            <label htmlFor={props.input.id}>{props.name}</label>
            <input  className="w-20 p-2 border rounded-md mr-4"
                    ref={ref} 
                    {...props.input}/>
        </div>
    );
});

export default Input;