import React, { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "../reducers/TodoReducer";

const TodoContext = createContext();
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      const toDoFromLocal = JSON.parse(localStorage.getItem("todosBatch51"));
      return toDoFromLocal || init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    localStorage.setItem("todosBatch51", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
