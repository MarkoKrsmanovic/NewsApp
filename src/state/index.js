import {combineReducers} from 'redux';
import TopNewsReducer from './TopNews/TopNewsReducer';
import CategoriesReducer from './Categories/CategoriesReducer';

export default combineReducers({
  topNews: TopNewsReducer,
  categories: CategoriesReducer,
});
