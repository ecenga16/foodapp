import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
           
                const response = await fetch('https://foodapp-f5c04-default-rtdb.europe-west1.firebasedatabase.app/meals.json');

                const responseData = await response.json();
                const loadedMeals = [];

                for (const key in responseData) {
                    loadedMeals.push({
                        id: key,
                        name: responseData[key].name,
                        description: responseData[key].description,
                        price: responseData[key].price,
                    });
                }
                setMeals(loadedMeals);
           
        };

        fetchMeals();
    }, []);

    return (
        <div>
            <Card>
                <ul>
                {meals.map((meal) => (
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
};

export default AvailableMeals;
