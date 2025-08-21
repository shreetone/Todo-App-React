import React, { useContext, useReducer, useState } from "react";
import { TodoContext } from '../context/TodoContext'
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const { dispatch } = useContext(TodoContext)

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    try {
      const payload = { name: name, description: description }
      dispatch({ type: 'ADD_TODO', payload: payload })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="text-primary mb-2">
              <i className="fas fa-plus-circle me-2"></i>
              Create New Task
            </h1>
            <p className="text-muted">Add a new task to your todo list</p>
          </div>

          {/* Form Card */}
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white py-3">
              <h4 className="card-title mb-0">
                <i className="fas fa-tasks me-2"></i>
                Task Details
              </h4>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-bold">Task Name *</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="e.g., Learn React Hooks"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold">Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Details about what needs to be done..."
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-md-2"
                    onClick={() => navigate('/')}
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!name}
                  >
                    <i className="fas fa-save me-2"></i>
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;