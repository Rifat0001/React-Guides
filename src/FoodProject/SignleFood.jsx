import React from 'react';

const SignleFood = ({ handleClicked, food, active }) => {
    // const handleClicked = () => {
    //     console.log(`${food} is brought`)
    // }
    return (
        <div>
            <li key={food} className={`list-group-item ${active && 'active'} `}>
                <div className='d-flex justify-content-between align-items-center'>
                    {food}
                    <button onClick={handleClicked} className='btn btn-success'>buy</button>
                </div>
            </li>
        </div >
    );
};

export default SignleFood;