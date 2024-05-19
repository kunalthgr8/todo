import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a title");
      return;
    }
    dispatch(addTodo({ title, content }));
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col gap-2 justify-center items-center"
    >
      <input
        type="text"
        placeholder="Write Title..."
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Write Content..."
        className="w-full border border-black/10 rounded-lg h-20 px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg px-3 py-1 w-2/3 bg-green-600 text-white shrink-0 "
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
