import React, { useState } from "react";
import "./style.css";
import Avatar from "@material-ui/core/Avatar";
import PhotoIcon from "@material-ui/icons/Photo";
import GifIcon from "@material-ui/icons/Gif";
import PollIcon from "@material-ui/icons/Poll";
import MoodIcon from "@material-ui/icons/Mood";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

const TweetBox = ({ addPost }) => {
  const [newPost, setNewPost] = useState("");
  const [newImage, setNewImage] = useState("");

  return (
    <div className="tweet-box">
      <form>
        <Avatar
          className="avatar-icon"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwirpz.wordpress.com%2F2015%2F06%2F01%2Fegg-timer-the-history-of-twitters-default-profile-pic%2F&psig=AOvVaw2ymAL3o9BmmWPTcAFw0vuf&ust=1614774904514000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCQ1brPke8CFQAAAAAdAAAAABAJ"
        />
        <div className="input-container">
          <div className="input-box">
            <input
              type="text"
              placeholder="What's happening ?"
              value={newPost}
              onChange={(ev) => {
                setNewPost(ev.target.value);
              }}
            />
            <input
             placeholder="Enter your image"
             value={newImage}
             onChange={(ev) => {
               setNewImage(ev.target.value)
              }
             }
              />
          </div>
          <div className="icons-container">
            <div>
              <PhotoIcon className="tweetbox-icon" />
              <GifIcon className="tweetbox-icon" />
              <PollIcon className="tweetbox-icon" />
              <MoodIcon className="tweetbox-icon" />
              <EventAvailableIcon className="tweetbox-icon" />
            </div>
            <button
              className={`tweet-box-btn ${newPost != "" || newImage != "" ? "tweet-box-btn__active" : ""}`}
              onClick={(ev) => {
                ev.preventDefault();
                addPost({
                  displayName: "UsamaSerag",
                  username: "usamaserag",
                  verified: true,
                  text: newPost,
                  image:newImage,
                  avatar:
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwirpz.wordpress.com%2F2015%2F06%2F01%2Fegg-timer-the-history-of-twitters-default-profile-pic%2F&psig=AOvVaw2ymAL3o9BmmWPTcAFw0vuf&ust=1614774904514000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCQ1brPke8CFQAAAAAdAAAAABAJ",
                });
                setNewPost('')
                setNewImage('')
              }}
            >
              Tweet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
