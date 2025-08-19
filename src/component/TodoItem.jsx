import React from 'react'

const TodoItem = () => {
  return (
    <div>
      <h2 className="text-center mb-4">Create Your Task</h2>
      <div className="card shadow p-4 rounded">
        <form>
          <div className="mb-3">
            <label className="form-label fw-bold">Task Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter task name"
            />
            </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Description</label> 
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter task description"
            ></textarea>
            </div>
          <button type="submit" className="btn btn-primary w-100">
            Add Task
          </button>
        </form> 
        </div>
    </div>
  )
}

export default TodoItem