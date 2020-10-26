import React, { useState, useEffect } from "react";
import TodoForm from "./todosForm";
import axios from "axios";
const Todos = ({ name }) => {
  const [showForm, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    userId: "",
    title: "",
    description: "",
    time: new Date(),
    important: false,
    done: false,
  });
  console.log(todos, 8654);
  const [edit, setEdit] = useState(false);
  const fetchTodo = async () => {
    try {
      const { data } = await axios.get("/api/v1/Todos");
      console.log(data, 6767);
      setTodos(data);
      setLoading(false);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShow(true);
          setTodo({
            userId: "",
            title: "",
            description: "",
            time: new Date(),
            important: false,
            done: false,
          });
        }}
      >
        {" "}
        Add Todo
      </button>
      {todos.length > 0
        ? todos.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
            </div>
          ))
        : null}
      {showForm && (
        <TodoForm
          //   edit={edit}
          //   setEdit={setEdit}
          setShow={setShow}
          setTodo={setTodo}
          todo={todo}
        />
      )}
    </>
  );
};

export default Todos;
