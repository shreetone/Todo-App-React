import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h1 className="display-4 fw-bold text-primary mb-3">
            <i className="fas fa-check-circle me-2"></i>
            About TodoMaster
          </h1>
          <p className="lead text-muted">
            Your personal productivity companion designed to simplify task management
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body p-4 p-md-5">
              {/* App Description */}
              <div className="row align-items-center mb-5">
                <div className="col-12 col-md-6">
                  <h2 className="fw-bold text-primary mb-3">Streamline Your Productivity</h2>
                  <p className="text-muted mb-4">
                    TodoMaster is a sleek, intuitive task management application built with modern web technologies 
                    to help you organize your daily tasks efficiently. With a clean interface and powerful features, 
                    staying on top of your responsibilities has never been easier.
                  </p>
                  <div className="d-flex">
                    <span className="badge bg-primary me-2 rounded-pill p-2">React</span>
                    <span className="badge bg-info me-2 rounded-pill p-2">Bootstrap</span>
                    <span className="badge bg-success rounded-pill p-2">Context API</span>
                  </div>
                </div>
                <div className="col-12 col-md-6 text-center d-none d-md-block">
                  <img 
                    src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Productivity" 
                    className="img-fluid rounded-3 shadow-sm"
                  />
                </div>
              </div>

              {/* Features Section */}
              <h3 className="fw-bold text-primary mb-4 text-center">Key Features</h3>
              <div className="row mb-5">
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div className="text-center">
                    <div className="bg-primary bg-opacity-10 rounded-3 p-3 d-inline-block mb-3">
                      <i className="fas fa-plus-circle fa-2x text-primary"></i>
                    </div>
                    <h5 className="fw-bold">Add Tasks</h5>
                    <p className="text-muted small">Quickly create new tasks with names and descriptions</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div className="text-center">
                    <div className="bg-success bg-opacity-10 rounded-3 p-3 d-inline-block mb-3">
                      <i className="fas fa-edit fa-2x text-success"></i>
                    </div>
                    <h5 className="fw-bold">Edit Tasks</h5>
                    <p className="text-muted small">Easily update task details as your needs change</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div className="text-center">
                    <div className="bg-info bg-opacity-10 rounded-3 p-3 d-inline-block mb-3">
                      <i className="fas fa-check-square fa-2x text-info"></i>
                    </div>
                    <h5 className="fw-bold">Track Progress</h5>
                    <p className="text-muted small">Mark tasks as complete and visualize your progress</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                  <div className="text-center">
                    <div className="bg-danger bg-opacity-10 rounded-3 p-3 d-inline-block mb-3">
                      <i className="fas fa-trash-alt fa-2x text-danger"></i>
                    </div>
                    <h5 className="fw-bold">Remove Tasks</h5>
                    <p className="text-muted small">Delete completed or unnecessary tasks with one click</p>
                  </div>
                </div>
              </div>

              {/* How to Use Section */}
              <h3 className="fw-bold text-primary mb-4 text-center">How To Use</h3>
              <div className="row mb-4">
                <div className="col-12">
                  <div className="card bg-light border-0 rounded-3 mb-3">
                    <div className="card-body">
                      <div className="d-flex">
                        <span className="badge bg-primary rounded-circle me-3 my-auto" style={{width: '30px', height: '30px', lineHeight: '30px'}}>1</span>
                        <div>
                          <h5 className="fw-bold">Create a new task</h5>
                          <p className="mb-0 text-muted">Use the "Add Task" form to create a new todo item with a name and optional description.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-light border-0 rounded-3 mb-3">
                    <div className="card-body">
                      <div className="d-flex">
                        <span className="badge bg-primary rounded-circle me-3 my-auto" style={{width: '30px', height: '30px', lineHeight: '30px'}}>2</span>
                        <div>
                          <h5 className="fw-bold">Track your progress</h5>
                          <p className="mb-0 text-muted">Mark tasks as complete when finished to keep track of what you've accomplished.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-light border-0 rounded-3">
                    <div className="card-body">
                      <div className="d-flex">
                        <span className="badge bg-primary rounded-circle me-3 my-auto" style={{width: '30px', height: '30px', lineHeight: '30px'}}>3</span>
                        <div>
                          <h5 className="fw-bold">Stay organized</h5>
                          <p className="mb-0 text-muted">Edit or remove tasks as needed to keep your todo list current and manageable.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;