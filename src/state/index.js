import {combineReducers} from 'redux';
import TopNewsReducer from './TopNews/TopNewsReducer';
import CategoriesReducer from './Categories/CategoriesReducer';
import CategoryReducer from './Category/CategoryReducer';

export default combineReducers({
  topNews: TopNewsReducer,
  categories: CategoriesReducer,
  category: CategoryReducer,
});
