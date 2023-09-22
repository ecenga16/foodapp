import React from 'react';
import HeaderIMG from '../../assets/food.jpg';
import ButtonHeaderCart from './ButtonHeaderCart';
import MealsSummary from '../Meals/MealsSummary';

const Header = (props) => {
    return (
        <div className="relative">
            <header className="w-full h-11 bg-slate-600 flex justify-between items-center px-11 text-white z-10">
                <h1>YourMeals</h1>
                <ButtonHeaderCart />
            </header>
            <img className="w-full h-96 object-cover origin-top-left" src={HeaderIMG} alt="Header Food" />
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white w-1/2">
                <MealsSummary />
            </div>
        </div>
    );
}

export default Header;