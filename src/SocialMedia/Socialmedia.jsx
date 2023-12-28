import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import './Social.css'
import CreatePost from './Components/CreatePost';
import Postlist from './Components/Postlist';
const Socialmedia = () => {
    const [selectedTab,setSelectedTab] = useState();
    return (
        <div className='d-flex '>
            <Sidebar  selectedTab={selectedTab} setSelectedTab={setSelectedTab} ></Sidebar>
            <div className="head-foot w-100 ">
                <Header></Header>
                {
                    selectedTab === 'home' ? <Postlist/> : <CreatePost/>
                }
                
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Socialmedia;