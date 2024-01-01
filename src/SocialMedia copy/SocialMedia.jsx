import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import './Social.css'
import CreatePost from './Components/CreatePost';
import Postlist from './Components/Postlist';
import PostProvider from './Components/PostStore';
const SocialMedia = () => {
    const [selectedTab,setSelectedTab] = useState('home');
    return (
        <PostProvider>
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
    </PostProvider>
    );
};

export default SocialMedia;