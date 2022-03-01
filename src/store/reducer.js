import {ActionType} from './action';

const initialState = {
  news: [],
  article: {},
  comments: [],
  subComments: [],
  isNewsLoaded: false,
  isArticleLoaded: false,
  isCommentsLoad: false,
  isSubCommentsLoad: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEWS:
      return {
        ...state,
        news: action.payload,
        isNewsLoaded: true,
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
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoad: true,
      };
    case ActionType.LOAD_SUB_COMMENTS:
      return {
        ...state,
        subComments: action.payload,
        isSubCommentsLoad: true,
      };
    case ActionType.RESET_ARTICLE:
      return {
        ...state,
        isArticleLoaded: false,
        isCommentsLoad: false,
        isSubCommentsLoad: false,
        article: {},
        comments: [],
        subComments: [],
      };
    case ActionType.RESET_NEWS:
      return {
        ...state,
        isNewsLoaded: false,
      };
    default:
      return state;
  }
};

export {reducer};
