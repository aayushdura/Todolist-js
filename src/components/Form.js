import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

const Form = (props) => {
  const { input, setInput, todos, setTodos, editTodos, setEditTodos } = props;

  const handleClick = (e) => {
    e.preventDefault();
    const updateTodo = (title, id, complete) => {
      const newTodo = todos.map((items) =>
        items.id === id ? { title, id, complete } : items
      );
      setTodos(newTodo);
      setEditTodos([]);
      setInput("");
    };

    const items = {
      id: uuidv4(),
      title: input,
      complete: false,
    };
    if (editTodos.length === 0) {
      setTodos([...todos, items]);
      setInput("");
    } else {
      updateTodo(input, editTodos.id, false);
    }
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpdate = () => {};
  // conditional rendering
  const buttonReturn = () => {
    if (editTodos.length === 0)
      return (
        <button type="submit" className="addbutton">
          ADD
        </button>
      );
    return (
      <button type="submit" className="addbutton" onClick={handleUpdate}>
        UPDATE
      </button>
    );
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          className="addbar"
          placeholder="Enter a To-Do"
          value={input}
          required
          onChange={handleInputChange}
        ></input>
        {buttonReturn()}
      </form>
    </div>
  );
};

export default Form;
