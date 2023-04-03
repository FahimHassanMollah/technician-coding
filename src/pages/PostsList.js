import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/post/postSlice';
import Loader from '../components/Loader';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, status: { fetchPosts: { isLoading, isError, isSuccess, error } } } = useSelector(state => state.post)
  useEffect(() => {

    dispatch(fetchPosts());

  }, [dispatch])

  return (
    <>
      {
        isLoading && <Loader />
      }
      <div>
        {posts.length}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">body</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {
                    posts.map((post, index) => (
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                       
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostsList