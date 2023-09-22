import React from "react";

function Card (props) {

    return <div class="p-4 rounded-lg shadow-md bg-gray-100 border border-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out">{props.children}</div>

}

export default Card;