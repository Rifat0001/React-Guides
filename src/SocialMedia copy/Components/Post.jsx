import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { useContext } from "react";
import { AllPostContext } from "./PostStore";
const Post = ({ post }) => {
  const {deletePost} = useContext(AllPostContext);
  return (
    <div>
      <div className="card" style={{ width: "500px", margin: "20px" }}>
        <div className="card-body">
          <h5 className="card-title"> {post.title} </h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete onClick={()=>deletePost(post.id)} className="fs-5" />
            <span className="visually-hidden">unread messages</span>
          </span>
          <p className="card-text">{post.body} </p>
          {post.tags.map((tag) =>
            <span key={tag} className="badge me-2 text-bg-primary">{tag}</span>
          )}
          <div className="mt-2 gap-2 d-flex align-items-center">
            <p><AiFillLike className="text-primary fs-3" /></p> <p className="fw-bold">{post.reactions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;