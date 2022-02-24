import {ActionType} from './action';

const initialState = {
  news: [],
  article: {},
  commentsTree: [],
  isCommentsTreeLoad: false,
  isArticleLoaded: false,
  isDataLoaded: false,
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
        article: action.payload,
        isArticleLoaded: true,
      };
    case ActionType.CREATE_ARTICLE:
      return {
        ...state,
        article: action.payload,
        isArticleLoaded: true,
      };
    case ActionType.LOAD_COMMENTS_TREE:
      return {
        ...state,
        commentsTree: action.payload,
        isCommentsTreeLoad: true,
      };
    case ActionType.RESET:
      return {
        ...state,
        isDataLoaded: false,
      };
    default:
      return state;
  }
};

export {reducer};
