import React from 'react';
import Header from './Header';
import Discription from './Discription';
import Controls from './Controls';
import { useSelector } from 'react-redux';
import Privacy from './Privacy';
const Redux = () => {
    const privacy = useSelector(store => store.privacy);
    return (
        <div className='card text-center p-5' style={{width:'500px'}} >
            <Header></Header> 
            {privacy ? <Privacy/> : <Discription/> }
            <Controls></Controls>
        </div>
    );
};

export default Redux;