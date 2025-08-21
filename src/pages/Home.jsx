import React from 'react'
import TodoList from '../component/TodoList'

const Home = () => {
  return (
    <div>
        <h1 className='text-center text-success '><b>To Do Application</b></h1>
        <TodoList />
    </div>
  )
}

export default Home