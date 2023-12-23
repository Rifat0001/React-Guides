import React, { useRef, useState } from 'react';

const TodoInput = ({ handleAddTask }) => {
const nameRef = useRef();
const dateRef = useRef();
    const handleInput = () => {
        const name = nameRef.current.value;
        const date = dateRef.current.value;
        handleAddTask(name,date);
        dateRef.current.value = '';
        nameRef.current.value = '' ;
    }
    return (
        <div className="row">
            <div className="col-6">
                <input type="text" ref={dateRef} placeholder="Enter todo here" />
            </div>
            <div className="col-4">
                <input type="date" ref={nameRef} name="" id="" />
            </div>
            <div className="col-2">
                <button onClick={handleInput} className="btn btn-success">Add</button>
            </div>
        </div>
    );
};

export default TodoInput;