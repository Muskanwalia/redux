import React, { useState, useEffect } from "react";
import "./App.css";

const Signup = (props) => {
  const { setShowTable } = props;
  const initialState = {
    name: "",
    username: "",
    email: "",
  };
  const [userInfo, setUserInfo] = useState(initialState);

  const signUp = () => {
    console.log(userInfo);
    let userData = [];
    const data = JSON.parse(localStorage.getItem("data"));
    console.log("calling data", data);
    if (data) {
      userData = [...data, userInfo];
    } else {
      userData.push(userInfo);
    }
    localStorage.setItem("data", JSON.stringify(userData));
    setUserInfo(initialState);
  };

  const login = () => {
    const data = JSON.parse(localStorage.getItem("data"));

    data.map((info) => {
      if (
        info.name == userInfo.name &&
        info.username == userInfo.username &&
        info.email == userInfo.email
      ) {
        console.log("Success");
        localStorage.setItem("token", "this");
        setShowTable(true);
      }
    });
  };

  return (
    <>
      <div className="box">
        <form>
          <input
            type="text"
            value={userInfo.name}
            placeholder="Enter name"
            name="name"
            onChange={(e) =>
              setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
            }
            required
          ></input>
          <input
            type="text"
            value={userInfo.username}
            placeholder="Enter username"
            name="username"
            onChange={(e) =>
              setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
            }
          ></input>
          <input
            type="text"
            value={userInfo.email}
            placeholder="Enter email"
            name="email"
            onChange={(e) =>
              setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
            }
            required
          ></input>
          <br />
          <button type="button" onClick={signUp}>
            Signup
          </button>
        
          <button type="button" onClick={login}>
            Login
          </button>
          <br />
        </form>
      </div>
    </>
  );
};

export default Signup;