import Card from './card';


const CardContainer = ({ meals }) => {

    return (
        <div className="flex flex-wrap p-10 justify-center items-center gap-4 bg-teal-100">
            {
                meals?.map((meal) => (
                    <Card key={meal.idMeal} meal={meal} />
                ))
            }
        </div>
    );
};

export default CardContainer;