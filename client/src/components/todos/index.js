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
  const editTodo = (id, title, description, time, important, done) => {
    setShow(true);
    setEdit(true);
    setTodo({ id, title, description, time, important, done });
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      <div className="todoContainer">
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
          Add Todo
        </button>
        <div className="mytodo">
          {todos.length > 0
            ? todos.map((todo) => (
                <div key={todo._id} className="todo">
                  <h3
                    onClick={() =>
                      editTodo(
                        todo._id,
                        todo.title,
                        todo.description,
                        todo.time,
                        todo.important,
                        todo.done
                      )
                    }
                  >
                    {todo.title}
                  </h3>
                  <div className="todo_controller">
                    <button type="button" onClick={() => console.log("hi")}>
                      <i className="fas fa-trash-alt"> del</i>
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
                          todo.done
                        )
                      }
                    >
                      <i className="fas fa-edit"> edit</i>
                    </button>
                  </div>
                  <p>{todo.description}</p>
                  <span>{todo.emportant}</span>
                  <span>{todo.dine}</span>

                  <span>{todo.time}</span>
                </div>
              ))
            : null}
        </div>
      </div>
      {/* <button
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
      </button> */}
      {/* {todos.length > 0
        ? todos.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
            </div>
          ))
        : null} */}
      {showForm && (
        <TodoForm
          edit={edit}
          setEdit={setEdit}
          setShow={setShow}
          setTodo={setTodo}
          todo={todo}
        />
      )}
    </>
  );
};

export default Todos;
