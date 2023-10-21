// InstagramProfile.js
import React from "react";
import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/profile.css";
import { NavLink, Outlet } from "react-router-dom";

function Profile0() {
  const list = ["post", "video", "shop"];
  const linkCat = ["/profile0/post0", "/profile0/video0", "/profile0/shop0"];
  return (
    <>
      <div className="profile">
        <div className="profile-container">
          <div className="profile-header">
            <img
              src={"https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/314408708_1265128927601059_6154401366225875850_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qObLSuLBoTUAX8hIc5L&_nc_ht=scontent-nrt1-1.xx&oh=00_AfAu-arrOY8VHJY4-WYnikPl4CsYB0H_fk489PqHEVnU8g&oe=652F1AC4"} // Replace with your profile picture URL
              alt="Profile"
              className="profile-picture"
            />
            <div className="profile-info">
              <h1>LwTseku</h1>
            </div>
          </div>

          <div className="profile-stats">
            <div>
              <strong>0</strong>
              <span>Posts</span>
            </div>
            <div>
              <strong>0</strong>
              <span>Followers</span>
            </div>
            <div>
              <strong>0</strong>
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
            <NavLink to={linkCat[index]} className="profileButton">
              {buttonList}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Profile0;
