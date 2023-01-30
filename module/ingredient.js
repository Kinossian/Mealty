import React from 'react';

const Ingredient = ({ meal, ingredient }) => {
    return (
        <li className='flex items-center justify-start h-auto w-auto border-b text-sm p-1 text-teal-900'
        >
            {ingredient} - {meal[`strIngredient${ingredient}`]}
        </li>
    );
};

export default Ingredient;