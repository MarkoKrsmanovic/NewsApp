import {
  TOP_NEWS_LOADING,
  TOP_NEWS_DONE,
  TOP_NEWS_ERROR,
  TOP_NEWS_PERSIST,
} from '../actionTypes';

let initialState = {
  articles: [],
  loading: false,
  done: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOP_NEWS_LOADING:
      return {...initialState, loading: action.payload.status};
    case TOP_NEWS_DONE:
      return {...state, done: true, loading: false};
    case TOP_NEWS_ERROR:
      return {...initialState, error: action.payload.error};
    case TOP_NEWS_PERSIST:
      return {...state, articles: action.payload.data};
    default:
      return state;
  }
};
