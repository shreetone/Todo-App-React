import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'; // Fixed component name and path
import Home from './pages/Home'
import TodoForm from './component/TodoForm'
import About from './pages/About'
import { TodoProvider } from './context/TodoContext' // Fixed context name

function App() {

  return (
    <>
      <BrowserRouter>
      <TodoProvider>
        <NavBar /> {/* Fixed component name */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/createTask' element={<TodoForm />}></Route> {/* Fixed component name */}
          <Route path='/about' element={<About />}></Route>
        </Routes>
        </TodoProvider>
      </BrowserRouter>
    </>
  )
}

export default App