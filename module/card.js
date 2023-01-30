import { useCallback, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import Detail from './detail';


const Card = ({ meal }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDetail, setIsDetail] = useState(false);

    const liked = useCallback(() => {
        setIsLiked(!isLiked);
    }, [isLiked]);
    const detail = useCallback(() => {
        setIsDetail(!isDetail);
    }, [isDetail]);
    return (
        <>
            {isDetail && <Detail meal={meal} setIsDetail={setIsDetail} />}
            <div
                onClick={detail}
                className="relative w-96 h-96 flex flex-col justify-between rounded select-none shadow-2xl cursor-pointer"
            >
                <img className="absolute w-full h-full rounded-lg object-cover" src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="absolute h-full w-full ">
                    <AiFillHeart
                        onClick={liked}
                        className={`${isLiked ? "text-red-600" : ""} absolute right-3 top-3 text-red-200 text-5xl cursor-pointer`}
                    />
                    <div className="absolute bottom-0 px-5 py-3 bg-opacity-30 text-white bg-teal-900 w-full h-auto rounded-b-lg">
                        <h2 className="text-2xl text-teal-50">{meal.strMeal}</h2>
                        <p className='text-teal-100 text-sm'>{meal.strTags ? meal.strTags : "..."}</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Card;