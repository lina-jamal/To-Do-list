import axios from "axios";

export const addTodo = async ({
  title,
  description,
  time,
  important,
  done,
  setTodos,
  todos,
}) => {
  try {
    const { data } = await axios.post("/api/v1/Todo", {
      title,
      description,
      time,
      important,
      done,
    });
    const { message, inserted } = data;

    if (message === "Todo successfully created ") {
      setTodos([...todos, inserted]);
    }
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
  setTodos,
  todos,
}) => {
  try {
    const { data } = await axios.put(`/api/v1/Todos/${id}`, {
      title,
      description,
      time,
      important,
      done,
    });
    const { todoEdit, msg } = data;
    if (msg === "todo updated") {
      const newTodos = todos.map((oldTodo) =>
        oldTodo._id === todoEdit._id ? todoEdit : oldTodo
      );
      setTodos(newTodos);
    }
    return data;
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
