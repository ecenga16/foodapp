import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

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
            <Card>
                <ul>
                {dummyMeals.map((meal) => (
                    <MealItem  
                        id={meal.id} 
                        key={meal.id} 
                        name={meal.name} 
                        description={meal.description} 
                        price={meal.price}/>
                    ))}
                </ul>
            </Card>
        </div>
    );
}

export default AvailableMeals;
