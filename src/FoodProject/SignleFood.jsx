import React from 'react';

const SignleFood = (props) => {
    const { food } = props;
    return (
        <div>
            <li key={food} className="list-group-item">{food}</li>
        </div>
    );
};

export default SignleFood;