import React, { useState, useEffect } from "react";
import "./style.css";
import TweetBox from "../../components/tweetbox/index";
import Post from "../../components/post/index";
import { FaRegStar } from "react-icons/fa";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  useEffect(() => {
    const oldAllPosts = JSON.parse(localStorage.getItem("data"));
    setPosts(oldAllPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="home">
      <div className="home-header">
        <h3>Home</h3>
        <FaRegStar className="home-icon" />
      </div>
      <TweetBox addPost={addPost} />
      <Post data={posts} />
    </div>
  );
};

export default Home;
