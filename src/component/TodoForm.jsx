import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Task name cannot be empty");
      return;
    }
    dispatch({
      type: "ADD_TODO",
      payload: { name, description },
    });
    setName("");
    setDescription("");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Create Your Task</h2>
      <div className="card shadow p-4 rounded">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Task Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter task name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary px-4 mt-2 mb-2 fw-bold  text-white shadow rounded border-0"
            >
              Add Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default TodoForm;
