import {
  CATEGORY_LOADING,
  CATEGORY_DONE,
  CATEGORY_ERROR,
  CATEGORY_PERSIST,
} from '../actionTypes';

let initialState = {
  articles: [],
  loading: false,
  done: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {...initialState, loading: action.payload.status};
    case CATEGORY_DONE:
      return {...state, done: true, loading: false};
    case CATEGORY_ERROR:
      return {...initialState, error: action.payload.error};
    case CATEGORY_PERSIST:
      return {...state, articles: action.payload.data};
    default:
      return state;
  }
};
