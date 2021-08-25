import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../sidebar/index";
import Home from "../../pages/home/index";
import Widgets from "../widgets/index";
import Profile from "../../pages/profile/index";
import { Switch, Route, useHistory } from "react-router-dom";
import { FaHome, FaRegBell, FaRegEnvelope, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function PageContainer() {
  let history = useHistory();

  useEffect(() => {
    const hasUser = JSON.parse(localStorage.getItem("loginData"));

    if (!hasUser) {
      history.push("/login");
    } else {
      history.push("/home");
    }
  }, []);

  const [activePage, setActive] = useState("Home");
  const handleActive = (pageName) => {
    setActive(pageName);
  };

  return (
    <div className="pages-container">
      <div className="wrapper">
        <div className="sidbar-container">
          <Sidebar />
        </div>
        <div className="content-conainer">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
        <div className="buttonsmenu">
          <Link className="link-component" to="/home">
            <FaHome className="icon" />
          </Link>
          <FaSearch className="icon" />
          <FaRegBell className="icon" />
          <FaRegEnvelope className="icon" />
        </div>
        <Widgets className="widgets" />
      </div>
    </div>
  );
}

export default PageContainer;
