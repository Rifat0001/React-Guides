import { useState } from "react";
import Container from "./Container";
import FoodSearch from "./FoodSearch";
import FootItems from "./FootItems";

const FoodMain = () => {
    const [foodItems, setFoodItems] = useState(['Milk', 'Rice', 'Fish', 'Vegetables'])
    const handleSearch = (e) => {
        if (e.key == 'Enter') {
            console.log(e.target.value);
            const newFoodItem = e.target.value;
            const newFoodList = [...foodItems, newFoodItem];
            setFoodItems(newFoodList)
            e.target.value = ''
        }

    }
    return (
        <div>
            <Container>
                <div className="mx-4 mt-4">
                    <FoodSearch handleSearch={handleSearch} ></FoodSearch>
                    <FootItems foodItems={foodItems}></FootItems>
                </div>
            </Container>
        </div>
    );
};

export default FoodMain;