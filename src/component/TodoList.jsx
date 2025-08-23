import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  
  const filteredTodos = state.todos.filter((todo) => {
    const matchesSearch =
      todo.name.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase());

    if (filter === "completed") return matchesSearch && todo.isComplete;
    if (filter === "incompleted") return matchesSearch && !todo.isComplete;
    return matchesSearch;
  });

  const handleEdit = (todo) => {
    const newName = prompt("Edit task name:", todo.name);
    const newDescription = prompt("Edit task description:", todo.description);
    
    if (newName !== null && newName.trim() !== "") {
      dispatch({
        type: "EDIT_TODO",
        payload: {
          id: todo.id,
          name: newName,
          description: newDescription
        }
      });
    }
  };

  return (
    <div className="container py-4">
      {/* Header and Filters */}
      {/**/}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">Task Manager</h2>
        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            style={{ width: "250px" }}
          />
          
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-filter me-2"></i>
              {filter === "all" ? "All Tasks" : 
               filter === "completed" ? "Completed" : "Incomplete"}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFilter("all")}
                >
                  <i className="fas fa-list me-2"></i>All Tasks
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFilter("completed")}
                >
                  <i className="fas fa-check-circle me-2"></i>Completed
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setFilter("incompleted")}
                >
                  <i className="fas fa-clock me-2"></i>Incomplete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      {filteredTodos.length === 0 ? (
        <div className="text-center py-5">
          <i className="fas fa-tasks fa-3x text-muted mb-3"></i>
          <p className="text-muted">No tasks found</p>
        </div>
      ) : (
        <div className="row">
          {filteredTodos.map((todo) => (
            <div key={todo.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className={`card h-100 shadow-sm ${todo.isComplete ? 'border-success' : 'border-warning'}`}>
                <div className={`card-header ${todo.isComplete ? 'bg-success text-white' : 'bg-warning'}`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="card-title mb-0">
                      <strong>{todo.name}</strong>
                    </h6>
                    <span className="badge bg-light text-dark">
                      {todo.isComplete ? "Completed" : "Pending"}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">{todo.description}</p>
                </div>
                <div className="card-footer bg-transparent">
                  <div className="d-flex gap-2 justify-content-between">
                    <button
                      onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                      className={`btn ${todo.isComplete ? 'btn-outline-warning' : 'btn-outline-success'} flex-fill`}
                    >
                      <i className={`fas ${todo.isComplete ? 'fa-undo' : 'fa-check'} me-2`}></i>
                      {todo.isComplete ? "Undo" : "Complete"}
                    </button>
                    
                    <button
                      onClick={() => handleEdit(todo)}
                      className="btn btn-outline-primary flex-fill"
                    >
                      <i className="fas fa-edit me-2"></i>
                      Edit
                    </button>
                    
                    <button
                      onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
                      className="btn btn-outline-danger flex-fill"
                    >
                      <i className="fas fa-trash me-2"></i>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;