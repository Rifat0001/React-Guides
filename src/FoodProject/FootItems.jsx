import { useState } from "react";
import SignleFood from "./SignleFood";

const FootItems = ({ foodItems }) => {
    const [activeItem, setActiveItem] = useState([]);
    const handleActive = (food) => {
        const newFood = [...activeItem, food];
        setActiveItem(newFood)
    }
    return (
        <div>
            <ul className="list-group ">
                {
                    foodItems.length === 0 ? <p>No food</p> :
                        foodItems.map((food) => (
                            <SignleFood key={food} food={food}
                                active={activeItem.includes(food)}
                                handleClicked={() => handleActive(food)}
                            ></SignleFood>
                        ))
                }
                {/* {
      foods.map((food) => (
        <li key={food} className="list-group-item">{food}</li>
      ))
    } */}
            </ul>
        </div>
    );
};

export default FootItems;