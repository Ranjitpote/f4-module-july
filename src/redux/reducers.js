// redux/reducers.js
import { combineReducers } from 'redux';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_LOADING, FETCH_POSTS_ERROR } from './actionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false, error: null };
    case FETCH_POSTS_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
});
