import React from "react";
import DateTimePicker from "react-datetime-picker";
import { addTodo, editTodo, clearItems, setValue } from "./function";
import "./style.css";
const TodoForm = ({
  todo,
  setTodo,
  setShow,
  edit,
  setEdit,
  setTodos,
  todos,
}) => {
  const { id, title, description, time, important, done } = todo;

  return (
    <>
      <form className="form-container">
        <h2>{edit ? "Edit" : "Add"} Your Todo</h2>
        <br></br>
        <label>
          Title
          <input
            value={title}
            onChange={(e) => setValue("title", e.target.value, setTodo, todo)}
          />
        </label>
        <br />

        <label>
          Description
          <input
            value={description}
            onChange={(e) =>
              setValue("description", e.target.value, setTodo, todo)
            }
          />
        </label>
        <br />

        <label>
          important:
          <select
            value={important}
            onChange={(e) =>
              setValue("important", e.target.value, setTodo, todo)
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <br />

        <label>
          done:
          <select
            value={done}
            onChange={(e) => setValue("done", e.target.value, setTodo, todo)}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <br />
        <label>
          Time
          <DateTimePicker
            className="timepicker"
            value={time}
            onChange={(date) => setValue("time", date, setTodo, todo)}
          />
        </label>
        <br />
        <div className="btn-container">
          <button
            type="button"
            className="todo_btn"
            onClick={() => {
              clearItems(setTodo, setEdit, setShow);
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="todo_btn"
            onClick={(e) => {
              e.preventDefault();
              edit
                ? editTodo({
                    id,
                    title,
                    description,
                    time,
                    important,
                    done,
                    setTodos,
                    todos,
                  })
                : addTodo({
                    title,
                    description,
                    time,
                    important,
                    done,
                    setTodos,
                    todos,
                  });
              clearItems(setTodo, setEdit, setShow);
            }}
          >
            {" "}
            {edit ? "Edit" : "Add Todo"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
