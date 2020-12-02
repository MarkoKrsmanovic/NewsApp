import {combineReducers} from 'redux';
import TopNewsReducer from './TopNews/TopNewsReducer';

export default combineReducers({
  topNews: TopNewsReducer,
});
