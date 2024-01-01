import { useContext } from 'react';
import { AllPostContext } from './PostStore';
import Post from './Post';
const Postlist = () => {
    const {postList} = useContext(AllPostContext);
    return (
        <div>
          {
            postList.length === 0 ? <h2 className='text-primary text-center my-5'>No posts in feed</h2> :
            postList.map((post)=>
            <Post key={post.id} post={post}></Post>
            )
          }
        </div>
    );
};

export default Postlist;