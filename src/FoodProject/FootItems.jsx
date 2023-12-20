import SignleFood from "./SignleFood";

const FootItems = (props) => {
    const { foodItems } = props;
    return (
        <div>
            <ul className="list-group ">
                {
                    foodItems.length === 0 ? <p>No food</p> :
                        foodItems.map((food) => (
                            <SignleFood key={food} food={food}></SignleFood>
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