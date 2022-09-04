import React from "react";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <h1>todos</h1>
      <TodoForm />
      <small>
        Left click to toggle completed <br /> Right click to delete todo
      </small>
    </>
  );
}

export default App;
