import {
  CATEGORY_LOADING,
  CATEGORY_DONE,
  CATEGORY_ERROR,
  CATEGORY_PERSIST,
} from '../actionTypes';

import axios from '../../globals/axios';
import {getTopNewsRoute} from '../../globals/constants/ApiConstants';

export const getCategory = (categoryName) => {
  return (dispatch) => {
    dispatch(startCategoryFetching());
    const config = {
      params: {
        country: 'us',
        category: categoryName,
      },
    };
    axios
      .getInstance()
      .get(getTopNewsRoute, config, {
        'Content-Type': 'application/x-www-form-urlencoded',
      })
      .then((response) => {
        dispatch(persistCategory(response.data));
        dispatch(onCategorySuccess());
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch(onCategoryError(error));
        return Promise.reject();
      });
  };
};

const startCategoryFetching = () => {
  return {
    type: CATEGORY_LOADING,
    payload: {
      status: 'Loading category...',
    },
  };
};

const onCategorySuccess = () => {
  return {
    type: CATEGORY_DONE,
  };
};

const onCategoryError = (error) => {
  return {
    type: CATEGORY_ERROR,
    payload: {error: error},
  };
};

const persistCategory = (category) => {
  return {
    type: CATEGORY_PERSIST,
    payload: {
      data: category.articles,
    },
  };
};
