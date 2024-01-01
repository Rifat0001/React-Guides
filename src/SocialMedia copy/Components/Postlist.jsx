import { useContext, useState } from 'react';
import { AllPostContext } from './PostStore';
import Post from './Post';
import Welcome from './Welcome';
const Postlist = () => {
  const { postList,initialPost } = useContext(AllPostContext);
  const [loading,setLoading] = useState(false);
  const reloadPosts = () => {
    setLoading(true);
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        initialPost(data.posts)
      })
      .catch((error) => {
        // Handle errors here and set loading state to false
        setLoading(false);
        console.error('Error fetching data:', error);
      });
  }
  return (
    <div>
      {
        postList.length === 0 ? <Welcome loading={loading} reloadPosts={reloadPosts} /> :
          postList.map((post) =>
            <Post key={post.id} post={post}></Post>
          )
      }
    </div>
  );
};

export default Postlist;