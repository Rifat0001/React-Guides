import React, { useState } from 'react';

const TodoInput = ({ handleAddTask }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const handleName = (e) => {
        setName(e.target.value);

    }
    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const handleInput = (name, date) => {
        handleAddTask(name, date);
        setDate('');
        setName('');
    }
    return (
        <div className="row">
            <div className="col-6">
                <input type="text" value={name} onChange={handleName} placeholder="Enter todo here" />
            </div>
            <div className="col-4">
                <input type="date" value={date} onChange={handleDate} name="" id="" />
            </div>
            <div className="col-2">
                <button onClick={() => handleInput(name, date)} className="btn btn-success">Add</button>
            </div>
        </div>
    );
};

export default TodoInput;