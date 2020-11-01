import axios from "axios";

export const fetchTodo = async (setTodos, setLoading) => {
  try {
    const { data } = await axios.get("/api/v1/Todos");
    console.log(data, 777);

    setTodos(data);
    setLoading(false);
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
    await axios.delete(`/api/v1/Todos/${id}`);
    return id;
  } catch (err) {
    throw err;
  }
};
