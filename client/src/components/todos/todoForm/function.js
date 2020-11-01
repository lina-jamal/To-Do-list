import axios from "axios";

export const addTodo = async ({
  title,
  description,
  time,
  important,
  done,
}) => {
  try {
    const { data } = await axios.post("/api/v1/Todo", {
      title,
      description,
      time,
      important,
      done,
    });

    return data;
  } catch (err) {
    throw err;
  }
};

export const editTodo = async ({
  id,
  title,
  description,
  time,
  important,
  done,
}) => {
  try {
    const { data } = await axios.put(`/api/v1/Todos/${id}`, {
      title,
      description,
      time,
      important,
      done,
    });
    const { msg } = data;
    return msg;
  } catch (err) {
    throw err;
  }
};

export const clearItems = (setTodo, setEdit, setShow) => {
  setEdit(false);
  setShow(false);
  setTodo({
    userId: "",
    title: "",
    description: "",
    time: new Date(),
    important: false,
    done: false,
  });
};
export const setValue = (key, value, setTodo, todo) => {
  setTodo({ ...todo, [key]: value });
};
