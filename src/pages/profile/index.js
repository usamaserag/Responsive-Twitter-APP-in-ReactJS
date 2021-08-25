import React from "react";
import "./style.css";
import PersonIcon from "@material-ui/icons/Person";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <h4>UsamaSerag</h4>
        <p className="tweets-number">0 Tweets</p>
      </div>
      <div className="profile-body">
        <img
          className="profile-photo"
          src="https://www.mlsu.ac.in/profilepics/539_483_default-profile%20(1).png"
        />
        <button className="profile-btn">Set up profile</button>
      </div>
      <div className="profile-user">
        <h4>usamaSerag</h4>
        <p>@usamaserag</p>
        <p className="join-date">Joined January 2019</p>
        <span className="bold">
          10 <span className="light">following</span>
        </span>
        <span className="bold">
          5 <span className="light">follower</span>
        </span>
      </div>
      <div className="tweets-container">
        <a href="#">Tweets</a>
        <a href="#">Tweets&amp;Replies</a>
        <a href="#">Media</a>
        <a href="#">Likes</a>
      </div>
    </div>
  );
};

export default Profile;
