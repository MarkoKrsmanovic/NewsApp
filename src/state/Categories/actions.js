import {
  CATEGORIES_LOADING,
  CATEGORIES_DONE,
  CATEGORIES_ERROR,
  CATEGORIES_PERSIST,
} from '../actionTypes';
import axios from '../../globals/axios';
import {getTopNewsRoute} from '../../globals/constants/ApiConstants';

export const getCategory = (categoryName) => {
  return (dispatch, getState) => {
    dispatch(startCategoryFetching(categoryName));
    const config = {
      params: {
        country: getState().newsLanguage.languageCode,
        category: categoryName,
        pageSize: 5,
      },
    };
    axios
      .getInstance()
      .get(getTopNewsRoute, config, {
        'Content-Type': 'application/x-www-form-urlencoded',
      })
      .then((response) => {
        dispatch(persistCategory(categoryName, response.data));
        dispatch(onCategorySuccess(categoryName));
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch(onCategoryError(categoryName, error));
        return Promise.reject();
      });
  };
};

const startCategoryFetching = (categoryName) => {
  return {
    type: CATEGORIES_LOADING,
    payload: {
      status: 'Loading category...',
      categoryName: categoryName,
    },
  };
};

const onCategorySuccess = (categoryName) => {
  return {
    type: CATEGORIES_DONE,
    payload: {categoryName: categoryName},
  };
};

const onCategoryError = (categoryName, error) => {
  return {
    type: CATEGORIES_ERROR,
    payload: {error: error, categoryName: categoryName},
  };
};

const persistCategory = (categoryName, categoryData) => {
  return {
    type: CATEGORIES_PERSIST,
    payload: {
      data: categoryData.articles,
      categoryName: categoryName,
    },
  };
};
