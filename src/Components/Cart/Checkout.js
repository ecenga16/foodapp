import React, { useRef, useState } from "react";


const isEmpty = value => value.trim() === '';
const isNotFiveChars = value => value.trim().length !== 5;

const Checkout = props => {

    const [formIsValid, setFormIsValid] = useState({
        name: true,
        street: true,
        postalcode: true,
        city: true,
    })


    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const checkName = !isEmpty(enteredName) && isNotFiveChars(enteredName);
        const checkStreet = !isEmpty(enteredStreet) && isNotFiveChars(enteredStreet);
        const checkPostalCode = !isEmpty(enteredPostalCode) && isNotFiveChars(enteredPostalCode);
        const checkCity = !isEmpty(enteredCity) && isNotFiveChars(enteredCity);

        setFormIsValid({
            name:checkName,
            street:checkStreet,
            postalcode:checkPostalCode,
            city:checkCity
        });

        const checkForm = checkName && checkStreet && checkPostalCode && checkCity;

    
        if (!checkForm) {
            console.log("Form is invalid.");
            return;
        }

        console.log(enteredName, enteredCity, enteredPostalCode, enteredStreet);
    }

    return (
        <form onSubmit={confirmHandler} className="container w-full lg:w-4/5 mx-auto bg-white rounded-lg shadow-xl p-6 mt-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input 
                    ref={nameInputRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="name" 
                    type="text" 
                    placeholder="Your Name" />
                {!formIsValid.name && <p class="text-xs text-red-600">Please enter a valid name!</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
                    Street
                </label>
                <input 
                    ref={streetInputRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="street" 
                    type="text" 
                    placeholder="Your Street" />
                {!formIsValid.street && <p class="text-xs text-red-600">Please enter a valid street!</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postal-code">
                    Postal Code
                </label>
                <input 
                    ref={postalCodeInputRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="postal-code" 
                    type="text" 
                    placeholder="Your Postal Code" />
                {!formIsValid.postalcode && <p class="text-xs text-red-600">Please enter a valid Postal Code!</p>}
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                    City
                </label>
                <input 
                    ref={cityInputRef}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="city" 
                    type="text" 
                    placeholder="Your City" />
                {!formIsValid.city && <p class="text-xs text-red-600">Please enter a valid City!</p>}
            </div>
            <div className="flex items-center justify-between">
                <button onClick={props.onCancel}
                    className="bg-gray-300 text-gray-600 hover:bg-gray-400 px-4 py-2 rounded transition-colors duration-300 ease-in-out" 
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