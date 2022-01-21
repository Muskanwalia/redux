import React, { useState, useEffect } from "react";
import TableData from "./Table.js";
import Signup from "./Signup.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import UserDetail from "./UserDetail.jsx";

const App = () => {
  const [showTable, setShowTable] = useState(false);
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  {
    /* {token ? (
        <Table setShowTable={setShowTable} setToken={setToken} />
      ) : (
        <Signup setShowTable={setShowTable} setToken={setToken} />
      )} */
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableData />}></Route>
        <Route path="/:id" element={<UserDetail />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

