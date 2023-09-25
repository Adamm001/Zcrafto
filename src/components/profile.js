// InstagramProfile.js
import React from 'react';
import 'C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/profile.css'

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150" // Replace with your profile picture URL
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info">
          <h1>John Doe</h1>
          <p>@johndoe</p>
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
  );
}

export default Profile;
