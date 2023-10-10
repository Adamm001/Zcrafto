import heartIcon from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/like_Icon.svg";
import fillHeart from "../icons/fillHeart.png"
import { useState } from "react";
const ProName = ({userImg, userName}) => {
  return (
    <div className="postBoxProName">
        <img src={userImg} alt="Pro Image" className="postBoxPro" />
      <span className="postBoxName">{userName}</span>
    </div>
  );
};
const Post = ({data}) => {
  const [likedtn, setLikedtn] = useState(data.like);
  return (
    <div className="postBox">
      <ProName userImg={data.profile.proPic} userName={data.profile.useName} />
      <img src={data.postImg} alt="zurag" className="postBoxImage" />
      <div className="postBoxAbout">
        <p className="postBoxDescription">{data.description}</p>
        <button className="likeButton" onClick={()=>
          likedtn ? setLikedtn(false) : setLikedtn(true)
        }>
          {
            likedtn ? 
            <img className="postLike" src={fillHeart} />:
            <img className="postLike" src={heartIcon} />
          }
          </button>        
      </div>
    </div>
  );
};

export default Post;
