import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import "./App.css";
import Todos from "./components/todos/todosPage";
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
      throw error;
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={() =>
            !auth ? (
              <Login setAuth={setAuth} setName={setName} />
            ) : (
              <Todos name={name} setAuth={setAuth} />
            )
          }
        ></Route>
      </Router>
    </>
  );
}

export default App;
