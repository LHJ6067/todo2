import "./App.css";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "밥먹기" },
    { id: 2, content: "씻기" },
    { id: 3, content: "잠자기" },
  ]);
  const [content, setContent] = useState("");
  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      content: content,
    };

    setTodos([...todos, newTodo]);
  };
  return (
    <div className="layout">
      <div className="head-container">
        <div>My Todo List</div>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="input-text"
          name="inputtitle"
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="add-input-button" onClick={addTodo}>
          추가하기
        </button>
      </div>
      <div className="list-wrapper">
        {todos.map((todo) => {
          return <div className="todo-box">{todo.content}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
