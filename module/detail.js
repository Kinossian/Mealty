import React, { useEffect, useState } from 'react';
import Ingredient from './ingredient';

const Detail = ({ setIsDetail, meal }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "initial";
        };
    }, []);

    let arrayIndex = [];
    for (let i = 0; i < 21; i++) {
        if (meal[`strIngredient${i}`]) {
            arrayIndex.push(i);
        }
    }



    return (
        <>
            <div className='fixed z-10 top-0 h-full w-full bg-teal-700 opacity-80'>
            </div>
            <div
                onClick={() => setIsDetail(false)}
                className='fixed flex flex-col lg:flex-row z-50 top-16 h-5/6 w-5/6 bg-teal-50 rounded-lg overflow-scroll cursor-pointer'
            >
                <img className="rounded-lg shadow-2xl h-1/3  lg:w-1/2 lg:h-auto m-5  object-cover" src={meal.strMealThumb} alt={meal.strMeal} />
                <div className='p-1 lg:mt-10 lg:w-1/2'>
                    <div className='w-11/12 flex flex-wrap items-baseline justify-evenly'>
                        <h2 className='text-5xl text-teal-600 font-extrabold'>{meal.strMeal}</h2>
                        <p className='text-sm text-teal-900'>From: {meal.strArea}</p>
                        <p className='text-sm text-teal-900'>Category: {meal.strCategory}</p>
                    </div>
                    <ul className='my-5 mx-5'>
                        <h3 className='uppercase text-xl font-bold text-teal-900'>Ingredients List :</h3>
                        <div className='flex flex-col ml-6'>
                            {
                                arrayIndex.map((ingredient) => (
                                    <Ingredient key={ingredient} ingredient={ingredient} meal={meal} />
                                ))
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Detail;