// InstagramProfile.js
import React from "react";
import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/profile.css";
import proImage from "../icons/post.jpeg";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {
  const list = ["post", "video", "shop"];
  const linkCat = ['/profile/post','/profile/video','/profile/shop']
  return (
    <>
      <div className="profile">
        <div className="profile-container">
          <div className="profile-header">
            <img
              src={proImage} // Replace with your profile picture URL
              alt="Profile"
              className="profile-picture"
            />
            <div className="profile-info">
              <h1>Khsblg_</h1>
              <button className="follow-button">Follow</button>
            </div>
          </div>

          <div className="profile-stats">
            <div>
              <strong>100</strong>
              <span>Posts</span>
            </div>
            <div>
              <strong>200</strong>
              <span>Followers</span>
            </div>
            <div>
              <strong>300</strong>
              <span>Following</span>
            </div>
          </div>

          <div className="profile-posts">
            {/* Display user's posts here */}
            {/* You can map through user's posts and render them */}
          </div>
        </div>
        <div className="profileCategory">
          {list.map((buttonList, index) => (
            <NavLink to={linkCat[index]}  className="profileButton">{buttonList}</NavLink>
          ))}
        </div>
      </div>
      <Outlet/>
    </>
  );
}

export default Profile;
