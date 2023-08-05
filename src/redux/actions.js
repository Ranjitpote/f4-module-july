// redux/actions.js
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_LOADING, FETCH_POSTS_ERROR } from './actionTypes';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_LOADING });

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_ERROR, payload: 'Error fetching posts.' });
  }
};
