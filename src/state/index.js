import {combineReducers} from 'redux';
import TopNewsReducer from './TopNews/TopNewsReducer';
import CategoriesReducer from './Categories/CategoriesReducer';
import CategoryReducer from './Category/CategoryReducer';
import NewsLanguageReducer from './NewsLanguage/NewsLanguageReducer';

export default combineReducers({
  topNews: TopNewsReducer,
  categories: CategoriesReducer,
  category: CategoryReducer,
  newsLanguage: NewsLanguageReducer,
});
