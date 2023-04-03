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
        isLoading && <Loader/>
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
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
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