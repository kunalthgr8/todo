import "./App.css";
import AddTodo from "./components/AddTodo";
import React, { useEffect } from "react";
import Todos from "./components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "./store/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      dispatch(setTodos(storedTodos));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8 w-full">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-10 pb-5">
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3 flex-col">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Your Todos
          </h1>
            {todos &&
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <Todos todo={todo} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
