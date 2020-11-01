import React from "react";
import DateTimePicker from "react-datetime-picker";
import { addTodo, editTodo, clearItems, setValue } from "./function";
const TodoForm = ({ todo, setTodo, setShow, edit, setEdit }) => {
  const { id, title, description, time, important, done } = todo;

  return (
    <>
      <form>
        <h2>{edit ? "Edit" : "Add"} Your Todo</h2>
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
        <button
          type="button"
          className="todobtn"
          onClick={() => {
            clearItems(setTodo, setEdit, setShow);
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="todobtn"
          onClick={(e) => {
            e.preventDefault();
            edit
              ? editTodo({ id, title, description, time, important, done })
              : addTodo({ title, description, time, important, done });
            clearItems(setTodo, setEdit, setShow);
          }}
        >
          {" "}
          {edit ? "Edit" : "Add Todo"}
        </button>
      </form>
    </>
  );
};

export default TodoForm;
