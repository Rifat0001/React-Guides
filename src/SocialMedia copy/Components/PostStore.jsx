import { createContext, useId, useReducer } from "react";
export const AllPostContext = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postReducer = (currentPost, action) => {
    let newPost = currentPost;
    if (action.type === "DELETE") {
        newPost = currentPost.filter((item) => item.id !== action.payload.id)
    }
    else if (action.type === "ADD") {
        newPost = [action.payload, ...currentPost]
    }
    else if(action.type === "INITIAL"){
        newPost = action.payload.posts;
    }
    return newPost;
}

const PostProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postReducer, []);

    const addPost = (userId, title, body, reactions, tags) => {
        dispatchPostList({
            type: 'ADD',
            payload: {
                id: Date.now(),
                title: title,
                body: body,
                reactions: reactions,
                userId: useId,
                tags: tags
            }
        })
    };
    const deletePost = (id) => {
        dispatchPostList({
            type: "DELETE",
            payload: { id }
        })
        console.log(`clicked ${id}`)
    };

    const initialPost = (posts) =>{
        dispatchPostList({
            type:"INITIAL",
            payload:{posts}
        })
    }

    return <AllPostContext.Provider value={{
        postList, addPost, deletePost, initialPost
    }} >
        {children}
    </AllPostContext.Provider>
}

// const Default_Post_List = [
//     {
//         id: '1',
//         title: "Going to Masjid",
//         body: 'Allah is all mighty. May Allah bless me to stay in the way of Islam',
//         reactions: 3,
//         userId: 'user-3',
//         tags: ['Allah', 'Islam', 'Masjid', 'Blessing']
//     },
//     {
//         id: '2',
//         title: "Do Good , get good",
//         body: 'Always try to do good for everyone, Allah will also give you good',
//         reactions: 6,
//         userId: 'user-5',
//         tags: ['Positive', 'Happy', 'Good', 'Helpful']
//     },
// ]

export default PostProvider;