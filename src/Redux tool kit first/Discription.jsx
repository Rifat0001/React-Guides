import React from 'react';
import { useSelector } from 'react-redux';

const Discription = () => {
    const counter = useSelector(store => store.counter)
    return (
        <div>
            <p>Counter current value: {counter} </p>
        </div>
    );
};

export default Discription;