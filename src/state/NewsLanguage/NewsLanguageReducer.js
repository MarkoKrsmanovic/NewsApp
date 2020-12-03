import {NEWS_LANGUAGE_PERSIST} from '../actionTypes';

let initialState = {
  languageCode: 'gb',
  languageName: 'GB',
  languageLongName: 'Great Britain',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_LANGUAGE_PERSIST:
      return {
        languageCode: action.payload.data.languageCode,
        languageName: action.payload.data.languageName,
        languageLongName: action.payload.data.languageLongName,
      };
    default:
      return state;
  }
};
