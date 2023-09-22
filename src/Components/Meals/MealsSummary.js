import React from "react";

function MealsSummary() {
    return (
        <section className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-4 rounded-lg shadow-md text-white sm:w-full w-6/7 mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Today's Special Meals</h2>
            <p className="text-sm md:text-base">
                We are excited to present our special meals for the day, featuring a sumptuous 
                roasted chicken served with a side of garlic mashed potatoes and seasonal vegetables. 
            </p>
        </section>
    );
}

export default MealsSummary;