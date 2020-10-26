import React, { useState, useEffect } from "react";

import Login from "./components/login";
import "./App.css";
import Todos from "./components/todos";
const axios = require("axios");

function App() {
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);
  const checkAuth = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth");
      const { name } = data;

      setName(name);
      setAuth(true);
    } catch (error) {
      setName("");
      throw error;
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      <Login setAuth={setAuth} />
      <Todos name={name} />
    </>
  );
}

export default App;
