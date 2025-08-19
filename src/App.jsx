import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TodoForm from './component/TodoForm';
import NavBar from './component/NavBar';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <NavBar /> 
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createTask" element={<TodoForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;