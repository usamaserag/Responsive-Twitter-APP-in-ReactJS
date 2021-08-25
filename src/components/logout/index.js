import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

function LogOut() {
  let history = useHistory();

  const handleLogOut = () => {
    localStorage.setItem(
      "loginData",
      JSON.stringify("")
    );
    history.push("/login");
  };

  return (
    <div>
      <button className="logout-btn" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}

export default LogOut;
