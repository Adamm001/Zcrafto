import heartIcon from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/like_Icon.svg";
import postImage from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/post.jpeg";
const ProName = () => {
  return (
    <div className="postBoxProName">
      <img src={postImage} alt="Pro Image" className="postBoxPro" />
      <span className="postBoxName">Name</span>
    </div>
  );
};
const Post = () => {
  return (
    <div className="postBox">
      <ProName />
      <img src={postImage} alt="zurag" className="postBoxImage" />
      <div className="postBoxAbout">
        <p className="postBoxDescription">Description</p>
        <button><img className="postLike" src={heartIcon} /></button>        
      </div>
    </div>
  );
};

export default Post;
