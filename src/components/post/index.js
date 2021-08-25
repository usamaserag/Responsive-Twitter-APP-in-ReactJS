import React from "react";
import "./style.css";
import Avatar from "@material-ui/core/Avatar";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PublishIcon from "@material-ui/icons/Publish";
import RepeatIcon from "@material-ui/icons/Repeat";

const Post = ({ data }) => {
  return (
    <div>
      {data.length > 0 ? (
        data.map((post, index) => {
          return (
            <div className="post" key={index}>
              <div className="post-avatar">
                <Avatar src={post.avatar} />
              </div>
              <div className="post-body">
                <div className="post-header">
                  <div className="post-headerText">
                    <h4>
                      {post.displayName}{" "}
                      <span>
                        <VerifiedUserIcon className="verified-icon" />@
                        {post.username}
                      </span>
                    </h4>
                  </div>
                  <div className="post-description">
                    <p>{post.text}</p>
                  </div>
                </div>
                <img className="post-img" src={post.image} />
                <div className="post-footer">
                  <ChatBubbleOutlineIcon className="footer-icon" />
                  <RepeatIcon className="footer-icon" />
                  <FavoriteBorderIcon className="footer-icon" />
                  <PublishIcon className="footer-icon" />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="no-posts">
          <p>No posts yet</p>
        </div>
      )}
    </div>
  );
};

export default Post;
