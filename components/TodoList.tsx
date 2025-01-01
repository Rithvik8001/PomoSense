"use client";

import { useState, useEffect } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState<string | null>(null);

  const addTodo = () => {
    if (newTodo.trim()) {
      try {
        setTodos((prevTodos) => [
          ...prevTodos,
          { id: Date.now(), text: newTodo.trim(), completed: false },
        ]);
        setNewTodo("");
        setError(null);
      } catch (err) {
        setError("Failed to add todo. Please try again.");
      }
    } else {
      setError("Todo text cannot be empty.");
    }
  };

  const toggleTodo = (id: number) => {
    try {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
      setError(null);
    } catch (err) {
      setError("Failed to update todo. Please try again.");
    }
  };

  const deleteTodo = (id: number) => {
    try {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      setError(null);
    } catch (err) {
      setError("Failed to delete todo. Please try again.");
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="font-mono">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Tasks</h2>
      {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a new task..."
          className="w-full p-2 border-b-2 border-current bg-transparent text-lg sm:text-xl mr-2"
        />
        <button
          onClick={addTodo}
          className="text-lg sm:text-xl border-b-2 border-current pb-1"
        >
          +
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`text-lg sm:text-xl cursor-pointer ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-lg sm:text-xl"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
