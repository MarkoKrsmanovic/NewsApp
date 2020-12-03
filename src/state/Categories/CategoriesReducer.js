import {
  CATEGORIES_LOADING,
  CATEGORIES_DONE,
  CATEGORIES_ERROR,
  CATEGORIES_PERSIST,
} from '../actionTypes';

let initialState = {
  entertainment: {
    title: 'Entertainment',
    data: [],
    loading: false,
    done: false,
    error: false,
  },
  general: {
    title: 'General',
    data: [],
    loading: false,
    done: false,
    error: false,
  },
  health: {
    title: 'Health',
    data: [],
    loading: false,
    done: false,
    error: false,
  },
  science: {
    title: 'Science',
    data: [],
    loading: false,
    done: false,
    error: false,
  },
  sport: {
    title: 'Sport',
    data: [],
    loading: false,
    done: false,
    error: false,
  },
  technology: {
    title: 'Technology',
    data: [],
    loading: false,
    done: false,
    error: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_LOADING:
      return {
        ...state,
        [action.payload.categoryName]: {
          ...initialState[action.payload.categoryName],
          loading: action.payload.status,
        },
      };
    case CATEGORIES_DONE:
      return {
        ...state,
        [action.payload.categoryName]: {
          ...state[action.payload.categoryName],
          done: true,
          loading: false,
        },
      };
    case CATEGORIES_ERROR:
      return {
        ...state,
        [action.payload.categoryName]: {
          ...initialState[action.payload.categoryName],
          error: action.payload.error,
        },
      };
    case CATEGORIES_PERSIST:
      return {
        ...state,
        [action.payload.categoryName]: {
          ...state[action.payload.categoryName],
          data: action.payload.data,
        },
      };
    default:
      return state;
  }
};
