import React, { useRef, useState } from "react";

const TodoForm = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const inputRef = useRef<any>();

  const formSubmitHander = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = inputRef.current.value as string;
    if (todo.length === 0) return;
    setTodos((prev) => [...prev, todo]);
    inputRef.current.value = "";
  };

  const todoClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.classList.toggle("completed");
  };

  const todoRightClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const currTodo = e.currentTarget.innerHTML;
    setTodos((prev) => prev.filter((todo) => todo !== currTodo));
  };

  return (
    <form
      onSubmit={(e) => {
        formSubmitHander(e);
      }}
    >
      <input
        ref={inputRef}
        type="text"
        className="input"
        id="input"
        placeholder="Enter your todo"
        autoComplete="off"
      />
      <ul className="todos" id="todos">
        {todos.map((todo, idx) => (
          <li
            key={idx}
            onClick={(e) => todoClickHandler(e)}
            onContextMenu={(e) => todoRightClickHandler(e)}
          >
            {todo}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default TodoForm;
