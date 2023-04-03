import React, { useState } from 'react'
import data from '../todo'
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../features/post/postSlice';
import Loader from '../components/Loader';
const PostAdd = () => {
  const dispatch = useDispatch();
  const { posts, status: { createPost: { isLoading, isError, isSuccess, error } } } = useSelector(state => state.post)

  const [blog, setBlog] = useState({title: '', body: '',userId:null});
  const createBlogHandler = (e) => {
    e.preventDefault();
    if (blog.title.trim().length !== 0 && blog.body.trim().length !== 0 && blog.userId !== null) {
      dispatch(createPost({ title: blog.title, body: blog.body,userId:blog.userId }));
      
    }
    console.log(data);
  }
  return (
    <div className='container'>
        {
        isLoading && <Loader />
      }
      <form onSubmit={createBlogHandler}>
        <div class="mb-3">
          <label for="todoName" class="form-label">Blog title</label>
          <input type="text" value={blog.name} onChange={(e)=> setBlog((currentBlog)=> ({...currentBlog,title:e.target.value}))} class="form-control" id="todoName" />
        </div>
        <div class="mb-3">
          <label for="todoName" class="form-label">Blog body</label>
          <textarea name="" value={blog.body} onChange={(e)=> setBlog((currentBlog)=> ({...currentBlog,body:e.target.value}))} className='form-control' id="" cols="30" rows="10"></textarea>
        </div>
        <div class="mb-3">
          <label for="blogUserId" class="form-label">Blog user id</label>
          <input type="number"value={blog.userId} onChange={(e)=> setBlog((currentBlog)=> ({...currentBlog,userId:e.target.value}))}class="form-control" id="blogUserId" />
        </div>
        {/* <div class="mb-3">
          <label for="todoDescription" class="form-label">Task status</label>
          <div class="form-check form-switch">
            <input value={todo.status} onChange={(e)=> setTodo((currentTodo)=> ({...currentTodo,status:e.target.checked}))} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Completed</label>
          </div>
        </div> */}


        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default PostAdd