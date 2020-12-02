import {
  TOP_NEWS_LOADING,
  TOP_NEWS_DONE,
  TOP_NEWS_ERROR,
  TOP_NEWS_PERSIST,
} from '../actionTypes';

import axios from '../../globals/axios';
import {getTopNewsRoute} from '../../globals/constants/ApiConstants';

export const getTopNews = () => {
  return (dispatch) => {
    dispatch(startTopNewsFetching());
    const config = {
      params: {
        country: 'us',
      },
    };
    axios
      .getInstance()
      .get(getTopNewsRoute, config, {
        'Content-Type': 'application/x-www-form-urlencoded',
      })
      .then((response) => {
        dispatch(persistTopNews(response.data));
        dispatch(onTopNewsSuccess());
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch(onTopNewsError(error));
        return Promise.reject();
      });
  };
};

const startTopNewsFetching = () => {
  return {
    type: TOP_NEWS_LOADING,
    payload: {
      status: 'Loading top news...',
    },
  };
};

const onTopNewsSuccess = () => {
  return {
    type: TOP_NEWS_DONE,
  };
};

const onTopNewsError = (error) => {
  return {
    type: TOP_NEWS_ERROR,
    payload: {error: error},
  };
};

const persistTopNews = (topNews) => {
  return {
    type: TOP_NEWS_PERSIST,
    payload: {
      data: topNews.articles,
    },
  };
};
