import React, { useState, useCallback } from "react";
import "./style.css";
import {
  FaTwitter,
  FaHome,
  FaSistrix,
  FaHashtag,
  FaRegBell,
  FaRegUser,
  FaRegEnvelope,
  FaEllipsisH,
  FaRegBookmark,
  FaRegListAlt,
  FaFeatherAlt,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [activePage, setActive] = useState("Home")
    const handleActive = () => {

    }
  return (
    <div className="sidebar">
      <div className="sideTop">
        <div className="logo">
          <FaTwitter className="twitter-icon" />
        </div>
        <Link className="link-component" to="/home">
          <div className="sidebar-option">
            <FaHome className="icon" />
            <span>Home</span>
          </div>
        </Link>
        <div className="sidebar-option">
          <FaSistrix className="icon icon-search" />
          <FaHashtag className="icon-responseve-display" />
          <span>Explore</span>
        </div>
        <div className="sidebar-option">
          <FaRegBell className="icon" />
          <span>Notifications</span>
        </div>
        <div className="sidebar-option">
          <FaRegEnvelope className="icon" />
          <span>Messages</span>
        </div>
        <div className="sidebar-option">
          <FaRegBookmark className="icon" />
          <span>Bookmarks</span>
        </div>
        <div className="sidebar-option">
          <FaRegListAlt className="icon" />
          <span>Lists</span>
        </div>
        <Link className="link-component" to="/profile">
          <div className="sidebar-option">
            <FaRegUser className="icon" />
            <span>Profile</span>
          </div>
        </Link>
        <div className="sidebar-option">
          <FaEllipsisH className="icon" />
          <span>More</span>
        </div>
        <div className="tweet">
          <FaPlus className="plus-icon" />
          <FaFeatherAlt className="Feather-icon" />
        </div>
        <button className="tweet-btn">Tweet</button>
      </div>
    </div>
  );
}
