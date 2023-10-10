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
              src={"https://scontent.fuln3-1.fna.fbcdn.net/v/t39.30808-6/314408708_1265128927601059_6154401366225875850_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=36JLHoYEvmQAX86aPuN&_nc_ht=scontent.fuln3-1.fna&oh=00_AfAje0rz1HLGfXTvVpNxSvt8mZghQWE_VOsdtuPBoxC_PQ&oe=65292C04"} // Replace with your profile picture URL
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
