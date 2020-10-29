import axios from "axios";

export const fetchTodo = async (setTodos) => {
  try {
    const { data } = await axios.get("/api/v1/Todos");
    setTodos(data);
  } catch (err) {
    throw err;
  }
};

export const editTodo = (
  id,
  title,
  description,
  time,
  important,
  done,
  setShow,
  setEdit,
  setTodo
) => {
  setShow(true);
  setEdit(true);
  setTodo({ id, title, description, time, important, done });
};
export const deleteTodo = async (id) => {
  try {
    const { data } = await axios.delete(`/api/v1/Todos/${id}`);
    return id;
  } catch (err) {
    throw err;
  }
};
