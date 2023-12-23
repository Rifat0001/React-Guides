import React, { useContext } from 'react';
import { TodoStore } from './TodoStore';

const Error = () => {
    const {tasks} = useContext(TodoStore);
    return (
        <div>
            {
                tasks.length === 0 && <h1>Nothing to do</h1>
            }
        </div>
    );
};

export default Error;