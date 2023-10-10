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
              src={"https://scontent.fuln3-1.fna.fbcdn.net/v/t39.30808-6/293782713_148126191145657_2453976179917815331_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=LxylOsVdl0MAX-9bvVx&_nc_ht=scontent.fuln3-1.fna&oh=00_AfCZKCItsQBSf7NzJRQLDg56qxI3OdjyBaHEU9B7l4bjpw&oe=6528DCDE"} // Replace with your profile picture URL
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
