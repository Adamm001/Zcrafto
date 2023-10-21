// InstagramProfile.js
import React from "react";
import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/profile.css";
import { NavLink, Outlet } from "react-router-dom";

function Profile1() {
  const list = ["post", "video", "shop"];
  const linkCat = ["/profile1/post1", "/profile1/video1", "/profile1/shop1"];
  return (
    <>
      <div className="profile">
        <div className="profile-container">
          <div className="profile-header">
            <img
              src={"https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/293782713_148126191145657_2453976179917815331_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rchnkpxoJ6sAX_497Mx&_nc_ht=scontent-nrt1-1.xx&oh=00_AfBr_pmouHLTbhvQDscCJqEIfTwO571jqbhC8uw4qXt2MQ&oe=652ECB9E"} // Replace with your profile picture URL
              alt="Profile"
              className="profile-picture"
            />
            <div className="profile-info">
              <h1>Khsblg</h1>
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

export default Profile1;
