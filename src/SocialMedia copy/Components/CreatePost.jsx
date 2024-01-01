import { useContext} from "react";
import { AllPostContext } from "./PostStore";

const CreatePost = () => {
const {addPost} = useContext(AllPostContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userId = form.userId.value;
    const title = form.userTitle.value;
    const body = form.userBody.value;
    const reactions = form.userReaction.value;
    const tags = form.userTag.value.split(" ");
    addPost(userId,title,body,reactions,tags)
    event.target.reset();
  }
  return (
    <div className="create-form">
      <form onSubmit={handleSubmit} className="form">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">Your User Id</label> <br />
          <input type="text" className="rounded p-2 w-100" name="userId" id="" />
        </div>
        <div className="mb-3">
          <label htmlFor="userTitle" className="form-label">Your Post Title</label><br />
          <input type="text" className="rounded p-2 w-100" name="userTitle" id="" />
        </div>
        <div className="mb-3">
          <label htmlFor="userBody" className="form-label">Your Post Body</label><br />
          <input type="text" className="rounded p-2 w-100" name="userBody" id="" />
        </div>
        <div className="mb-3">
          <label htmlFor="userReactions" className="form-label">Your Reactions</label><br />
          <input type="text" className="rounded p-2 w-100" name="userReaction" id="" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Your Tags</label><br />
          <input type="text" className="rounded p-2 w-100" name="userTag" id="" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;