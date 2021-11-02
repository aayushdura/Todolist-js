import React from "react";
import "./Todolists.css";

const Todolist = (props) => {
  const { todos, setTodos, setEditTodos, setInput } = props;

  const handleComplete = (item) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === item.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const editingTodo = todos.find((item) => item.id === id);
    setEditTodos(editingTodo);
    setInput(editingTodo.title);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <ul className="lists">
      {todos.map((item) => {
        const style = item.complete !== true ? "" : "#56d4c9";

        return (
          <li className="liitem" key={item.id}>
            <input
              type="text"
              value={item.title}
              id="box"
              disabled
              style={{ backgroundColor: style }}
            />
            <button className="Dbtns" onClick={() => handleDelete(item)}>
              Delete
            </button>
            <button className="btns" onClick={() => handleEdit(item)}>
              <i>Edit</i>
            </button>
            <input
              type="checkbox"
              className="compbtn"
              checked={item.complete}
              onChange={() => handleComplete(item)}
            ></input>
          </li>
        );
      })}
    </ul>
  );
};

export default Todolist;
