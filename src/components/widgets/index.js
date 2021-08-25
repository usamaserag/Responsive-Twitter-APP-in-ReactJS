import React from 'react';
import "./style.css";
import { FaSearch } from "react-icons/fa";
import TweetEmbed from 'react-tweet-embed'


const Widgets = () => {
    return (
        <div className="widgets">
            <div className="search-box">
                <FaSearch className="search-icon" />
                <input className="search-input" type="search" placeholder="Search Twitter" />
            </div>
            <div className="widgets-container">
                <h4>What’s happening</h4>
                <TweetEmbed id="692527862369357824" />
                <TweetEmbed id='783943172057694208' options={{ cards: 'hidden' }} />
                <TweetEmbed id='771763270273294336' options={{ theme: 'dark' }} />
            </div>
        </div>
    )
}
export default Widgets
