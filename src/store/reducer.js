import {ActionType} from './action';

const initialState = {
  news: [],
  article: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEWS:
      return {
        ...state,
        news: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_ARTICLE:
      return {
        ...state,
        article: action.payload.data,
        isDataLoaded: true,
      };
    case ActionType.CLEAR_ARTICLE:
      return {
        ...state,
        article: {},
        isDataLoaded: true,
      };
    case ActionType.CREATE_ARTICLE:
      return {
        ...state,
        article: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {reducer};
