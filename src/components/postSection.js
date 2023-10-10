import Post from "./post";
import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/postsection.css";
import { useState } from "react";
import { ProfileData } from "../js/postData";


const NewPost = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
  const handleImageChange = (e) => {
      const file = e.target.files[0];
      setSelectedImage(file);
  };

  const handleUpload = () => {
      console.log('Selected Image:', selectedImage);
  };

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
      <input type="file" accept="image/*"  onChange={handleImageChange} />
      <button onClick={handleUpload} className="newPostPostBtn">Upload</button>
    </div>
  );
};

const PostSection = () => {
  return (
    <div className="postSection">
      {
        ProfileData.map((data, index)=>(
          <Post data={data} />
        ))
      }
    </div>
  );
};

export default PostSection;
