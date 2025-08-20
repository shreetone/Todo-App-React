import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Home = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const handleEdit = (id, currentName, currentDescription) => {
    const newName = prompt("Enter new task name:", currentName);
    const newDesc = prompt("Enter new description:", currentDescription);

    if (newName && newName.trim()) {
      dispatch({
        type: "EDIT_TODO",
        payload: { id, name: newName, description: newDesc },
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 ">Welcome to Your Todo App</h2>

      <div className="card ">
        {state.todos.length === 0 ? (
          <p className="text-center">
            <b>"Add Task"</b>
          </p>
        ) : (
          <ul className="list-group">
            {state.todos.map((todo) => (
              <li
                key={todo.id}
                className={`list-group-item d-flex justify-content-between align-items-center
                  ${todo.isComplete ? "list-group-item-success" : ""}`}
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
                    onClick={() => handleToggle(todo.id)}
                  >
                    {todo.isComplete ? "Undo" : "Complete"}
                  </button>

                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>

                  <button
                  
                    onClick={() =>
                      handleEdit(todo.id, todo.name, todo.description)
                    }
                  >
                    Update
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
