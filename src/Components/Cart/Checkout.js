import React from "react";

const Checkout = props => {
    return (
        <form className="container w-full lg:w-4/5 mx-auto bg-white rounded-lg shadow-xl p-6 mt-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="name" 
                    type="text" 
                    placeholder="Your Name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
                    Street
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="street" 
                    type="text" 
                    placeholder="Your Street" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postal-code">
                    Postal Code
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="postal-code" 
                    type="text" 
                    placeholder="Your Postal Code" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                    City
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="city" 
                    type="text" 
                    placeholder="Your City" />
            </div>
            <div className="flex items-center justify-between">
                <button onClick={props.onCancel}
                    className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-300 ease-in-out" 
                    type="submit">
                    Cancel
                </button>
                <button 
                    className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-300 ease-in-out" 
                    type="submit">
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default Checkout;