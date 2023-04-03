import React, { useState } from 'react'
import data from '../todo'
const PostAdd = () => {
  const [todo, setTodo] = useState({name: '', status: false});
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todo.name.trim().length !== 0) {
      data.push({id: window.crypto.randomUUID(), text: todo.name, isCompleted: todo.status})
    }
    console.log(data);
  }
  return (
    <div className='container'>
      <form onSubmit={addTodoHandler}>
        <div class="mb-3">
          <label for="todoName" class="form-label">Task name</label>
          <input type="text" value={todo.name} onChange={(e)=> setTodo((currentTodo)=> ({...currentTodo,name:e.target.value}))} class="form-control" id="todoName" />
        </div>
        <div class="mb-3">
          <label for="todoDescription" class="form-label">Task status</label>
          <div class="form-check form-switch">
            <input value={todo.status} onChange={(e)=> setTodo((currentTodo)=> ({...currentTodo,status:e.target.checked}))} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Completed</label>
          </div>
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default PostAdd