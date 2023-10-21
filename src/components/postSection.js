import Post from "./post";
import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/postsection.css";
import { useState } from "react";
import { ProfileData } from "../js/postData";


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
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const PostBtn = () =>{
    if (link.trim() === "") return;
    
    const updatedText = {profile:{useName:'user', proPic:'https://icons-for-free.com/iconfiles/png/512/instagram+profile+user+icon-1320184028326496024.png'},
    postImg:link,
    description:text,
    like:false};
    ProfileData.push(updatedText)
    setLink("")
    setText("")
    console.log(link, text)
  }
  return (
    <div className="newPost">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
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
      <input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        type="text"
        name="Link"
        placeholder="Image link.."
        className="newPostInput"
      />
      <button className="newPostPostBtn" onClick={PostBtn}>Upload</button>
    </div>
  );
};

const PostSection = () => {
  return (
    <div className="postSection">
      <NewPost/>
      {
        ProfileData.map((data, index)=>(
          <Post data={data} />
        ))
      }
    </div>
  );
};

export default PostSection;
