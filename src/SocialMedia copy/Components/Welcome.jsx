import React from 'react';

const Welcome = ({reloadPosts,loading}) => {
    return (
        <div className='text-center py-5 '>
            <h1>Welcome to Social Feeds</h1>
            <p className='py-2'>Click for load initial posts</p>
            <button onClick={reloadPosts} className='btn btn-primary'>
                {
                    loading ? 'Loading...' : 'Click'
                }
            </button>
        </div>
    );
};

export default Welcome;