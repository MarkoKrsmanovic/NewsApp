import {NEWS_LANGUAGE_PERSIST} from '../actionTypes';

export const changeNewsLanguage = (
  languageCode,
  languageName,
  languageLongName,
) => {
  return {
    type: NEWS_LANGUAGE_PERSIST,
    payload: {
      data: {
        languageCode: languageCode,
        languageName: languageName,
        languageLongName: languageLongName,
      },
    },
  };
};
