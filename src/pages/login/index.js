import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { FaTwitter } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const adminUser = {
  email: "usama@home.com",
  password: "1234",
};

function LoginForm() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  let history = useHistory();
  const hasUser = JSON.parse(localStorage.getItem("loginData"));

  useEffect(() => {
    if (hasUser) history.push('/')
  }, [])

  const submitHandler = (ev) => {
    ev.preventDefault();
    if (
      user.email == adminUser.email &&
      user.password == adminUser.password
    ) {
      localStorage.setItem("loginData", JSON.stringify(user));
      history.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form className="login-page" onSubmit={submitHandler}>
      <div className="form-inner">
        <FaTwitter className="icon-login" />
        <h2>Log in to Twitter</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-content">
          <input
            ref={emailRef}
            className="email"
            type="email"
            required
            onChange={(ev) => {
               setUser({ ...user, email: ev.target.value });
              }
            }
          />
          <span onClick={() => emailRef.current.focus()} className={user.email === "" ? 'text-input' : "text-input-focus" }>Phone, email, or username</span>
        </div>
        <div className="form-content">
          <input
            ref={passwordRef}
            className="password"
            type="password"
            required
            onChange={(ev) =>
              setUser({ ...user, password: ev.target.value })
            }
          />
          <span onClick={() => passwordRef.current.focus()} className={user.password === "" ? 'text-input' : "text-input-focus" }>Password</span>
        </div>
        <input className={`btn-submit ${user.email && user.password ? 'btn-submit-active' : ""}`} type="submit" value="Log in" />
      </div>
    </form>
  );
}

export default LoginForm;
