import Post from "./post";
import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/postsection.css";

const NewPost = () => {
  const category = [
    "Wood craving",
    "Beads",
    "Leather craft",
    "Clay craft",
    "Crochet",
    "Knitting",
    "Mask craft",
    "Origami",
    "Painting",
  ];
  return (
    <div className="newPost">
      <input
        type="text"
        name="descrition"
        placeholder="Text..."
        className="newPostInput"
      />
      <div className="newPostBox">
        {category.map((heseg) => (
          <button className="newPostCatBtn">{heseg}</button>
        ))}
      </div>
      <button className="newPostUploadBtn">Image Upload</button>
      <button className="newPostPostBtn">Post</button>
    </div>
  );
};

const PostSection = () => {
  return (
    <div className="postSection">
      <NewPost />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostSection;
