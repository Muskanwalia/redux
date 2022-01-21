import React, { useEffect, useState } from "react";
import Signup from "./Signup.js";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

const Table = (props) => {
  const { setShowTable, setToken } = props;
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [uName, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  const initialState = {
    name: "",
    username: "",
    email: "",
  };
  const [userInfo, setUserInfo] = useState(initialState);

  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "get",
    }).then((response) => {
      setUsers(response.data);
    });
  }, []);

  const deleteUser = (id) => {
    const filteredData = users.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setUsers(filteredData);
  };

  const showMore = (id) => {
    const filteredData = users.filter((item) => {
      console.log(item);
    });
   
  };

  const logout = () => {
    setToken();
    localStorage.removeItem("token");
  };

  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Operations</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button
                type="button"
                className="delete"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
              <Link style={{ color: "black" }} role="button" to={`/${user.id}`}>
                Show More
              </Link>
              {/* <button type = "submit" onClick={() => showMore(user.id)}>Show More</button> */}
            </td>
          </tr>
        ))}
      </table>
      <button onClick={logout}>Logout</button>

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
        </form>
      </div>
    </>
  );
};

export default Table;

