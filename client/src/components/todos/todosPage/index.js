import React, { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import TodoForm from "../todoForm";
import Header from "../../header";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { IoMdDoneAll } from "react-icons/io";

import "./style.css";

import { fetchTodo, editTodo, deleteTodo } from "./function";

const Todos = ({ name, setAuth }) => {
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [showForm, setShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    userId: "",
    title: "",
    description: "",
    time: new Date(),
    important: false,
    done: false,
  });

  useEffect(() => {
    fetchTodo(setTodos, setLoading);
  }, [todos.length === 0]);

  const addTodo = () => {
    setShow(true);
    setTodo({
      userId: "",
      title: "",
      description: "",
      time: new Date(),
      important: false,
      done: false,
    });
  };
  return (
    <>
      <Header name={name} setAuth={setAuth} addTodo={addTodo} />
      <div className="todoContainer">
        <div className="all_todos">
          {!loading && todos.length > 0 ? (
            todos.map((todo) => (
              <div key={todo._id} className="todo">
                <div className="todo_top">
                  <h3
                    style={
                      todo.done
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                    }
                  >
                    {todo.title}
                  </h3>
                  <div className="todo_icons">
                    <button
                      type="button"
                      onClick={async () => {
                        const deleted = await deleteTodo(todo._id);
                        if (deleted === todo._id) {
                          setTodos(todos.filter((t) => t._id !== deleted));
                        }
                      }}
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        editTodo(
                          todo._id,
                          todo.title,
                          todo.description,
                          todo.time,
                          todo.important,
                          todo.done,
                          setShow,
                          setEdit,
                          setTodo
                        )
                      }
                    >
                      <AiFillEdit />
                    </button>
                    {todo.done ? (
                      <IoMdDoneAll color="green" width="30" />
                    ) : null}
                    {todo.important ? <ImPower color="#cb3737" /> : null}
                  </div>
                </div>
                <div className="todo-bottom">
                  <br></br>
                  <span>{todo.description}</span>
                  {todo.important ? (
                    <>
                      <span style={{ color: "rgb(202, 5, 5)" }}>
                        {" "}
                        You must doing this task as soon
                      </span>{" "}
                      <br></br>
                    </>
                  ) : null}

                  <span>{todo.time}</span>
                </div>
              </div>
            ))
          ) : (
            // <h2>Loading ....!</h2>
            <Loader type="ThreeDots" color="#00BFFF" height={60} width={60} />
          )}
        </div>
      </div>

      {showForm && (
        <TodoForm
          edit={edit}
          setEdit={setEdit}
          setShow={setShow}
          setTodo={setTodo}
          todo={todo}
          setTodos={setTodos}
          todos={todos}
        />
      )}
    </>
  );
};

export default Todos;
