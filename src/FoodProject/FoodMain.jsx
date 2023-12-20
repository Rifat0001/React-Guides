import FootItems from "./FootItems";

const FoodMain = () => {
    let foodItems = ['Milk', 'Rice', 'Fish', 'Vegetables', 'Meat', 'Egg'];
    return (
        <div>
            <div className="mx-4 mt-4">
                <h1>Healthy Food</h1>
                <FootItems foodItems={foodItems}></FootItems>
            </div>
        </div>
    );
};

export default FoodMain;