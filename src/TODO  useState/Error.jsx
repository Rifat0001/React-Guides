import React from 'react';

const Error = ({ tasks }) => {
    return (
        <div>
            {
                tasks.length === 0 && <h1>Nothing to do</h1>
            }
        </div>
    );
};

export default Error;