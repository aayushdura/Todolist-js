import React, { useState } from "react";
import "./Todolists.css";
import Form from "../components/Form";
import Header from "../components/Header.js";
import Todolist from "../components/Todolist";

const Todolists = (userInfo) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodos, setEditTodos] = useState([]);

  return (
    <div className="Appcontainer">
      <Header />
      <span>
        <h1>Welcome:{userInfo.title}</h1>
      </span>
      <div className="Addbar">
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodos={editTodos}
          setEditTodos={setEditTodos}
        />
      </div>
      <Todolist
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodos={editTodos}
        setEditTodos={setEditTodos}
      />
    </div>
  );
};

export default Todolists;
