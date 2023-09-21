import React from 'react';

const AvailableMeals = () => {
    const dummyMeals = [
        {
            id: 'm1',
            name: 'Spaghetti',
            description: 'A classic Italian dish.',
            price: 12.99,
        },
        {
            id: 'm2',
            name: 'Hamburger',
            description: 'Juicy and delicious.',
            price: 8.99,
        },
        {
            id: 'm3',
            name: 'Salmon Plate',
            description: 'Freshly caught salmon with vegetables.',
            price: 15.99,
        },
        {
            id: 'm4',
            name: 'Veggie Pizza',
            description: 'Healthy and delicious pizza for veggie lovers.',
            price: 9.99,
        },
    ];

    return (
        <div>
            <h1>Available Meals</h1>
            <ul>
                {dummyMeals.map((meal) => (
                    <li key={meal.id}>
                        <h2>{meal.name}</h2>
                        <p>{meal.description}</p>
                        <p><strong>Price:</strong> ${meal.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AvailableMeals;
