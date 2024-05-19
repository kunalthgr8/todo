import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      // id: 1,
      // title: "Hello World",
      // content: "This is a sample todo",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, title, content } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, title, content } : todo
      );
    },
    setTodos: (state, action) =>{
      state.todos= action.payload;
    }
  },
});

export const { addTodo, deleteTodo, editTodo, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
