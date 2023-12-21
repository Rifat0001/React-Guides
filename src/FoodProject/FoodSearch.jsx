
const FoodSearch = ({ handleSearch }) => {
    return (
        <div>
            <input type="text" onKeyDown={handleSearch} className="form-control mb-4 border border-success border-2" placeholder="Search" />
        </div>
    );
};

export default FoodSearch;