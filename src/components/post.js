import heartIcon from "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/icons/like_Icon.svg";
import fillHeart from "../icons/fillHeart.png"
import { useState } from "react";
import { Button } from "antd";
const ProName = ({userImg, userName}) => {
  const proLink = userName === "LwTseku" ? "http://localhost:3000/profile0/post0" : "http://localhost:3000/profile1/post1"
  return (
    
    <Button key="link" href={proLink} className="postBoxProName">
        <img src={userImg} alt="Pro Image" className="postBoxPro" />
      <span className="postBoxName">{userName}</span>
    </Button>
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
