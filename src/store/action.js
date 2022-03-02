export const ActionType = {
  LOAD_NEWS: 'data/news',
  LOAD_ARTICLE: 'data/loadArticle',
  CREATE_ARTICLE: 'data/createArticle',
  LOAD_COMMENTS: 'data/loadComments',
  LOAD_SUB_COMMENTS: 'data/loadSubComments',
  RESET_NEWS: 'data/resetNews',
  RESET_ARTICLE: 'data/resetArticle',
  RESET_COMMENTS: 'data/resetComments',
};

export const ActionCreator = {
  loadNews: (news) => ({
    type: ActionType.LOAD_NEWS,
    payload: news,
  }),
  loadArticle: (article) => ({
    type: ActionType.LOAD_ARTICLE,
    payload: article,
  }),
  createArticle: (article) => ({
    type: ActionType.CREATE_ARTICLE,
    payload: article,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  loadSubComments: (comments) => ({
    type: ActionType.LOAD_SUB_COMMENTS,
    payload: comments,
  }),
  resetNews: () => ({
    type: ActionType.RESET_NEWS,
  }),
  resetArticle: () => ({
    type: ActionType.RESET_ARTICLE,
  }),
  resetComments: () => ({
    type: ActionType.RESET_COMMENTS,
  }),
};
