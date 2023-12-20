import React from 'react';
const TodoItem = ({ item, date }) => {
    return (
        <div>
            <div className="row my-2">
                <div className="col-6">
                    <p>{item}</p>
                </div>
                <div className="col-4">
                    <p>{date}</p>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;