export const ActionType = {
  LOAD_NEWS: 'data/news',
  LOAD_ARTICLE: 'data/loadArticle',
  CREATE_ARTICLE: 'data/createArticle',
  RESET: 'data/reset',
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
  resetData: () => ({
    type: ActionType.RESET,
    payload: false,
  }),
};
