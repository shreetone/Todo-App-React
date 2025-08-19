import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <>
    <div className="container mt-4">
      <h2 className="text-center mb-4">Welcome to Your Todo App</h2>

      <div className="card shadow p-4 rounded mb-4">
        {state.todos.length === 0 ? (
          <p className="text-center text-muted">
            No tasks yet. Click on <b>"Add Task"</b> to create your first todo!
          </p>
        ) : (
          <ul className="list-group">
            {state.todos.map((todo) => (
              <li
                key={todo.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  todo.isComplete ? "list-group-item-success" : ""
                }`}
              >
                <div>
                  <h6
                    style={{
                      textDecoration: todo.isComplete ? "line-through" : "none",
                    }}
                  >
                    {todo.name}
                  </h6>
                  <p className="mb-0 text-muted">{todo.description}</p>
                </div>

                <div>
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => handleToggle(todo.id)}
                  >
                    {todo.isComplete ? "Undo" : "Complete"}
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="text-center mt-4">
        <p className="text-muted">© 2025 Your Todo App</p>
      </div>
    </div>
    </>
  );
};

export default Home;
