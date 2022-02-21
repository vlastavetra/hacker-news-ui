export const ActionType = {
  LOAD_NEWS: 'data/news',
  LOAD_ARTICLE: 'data/loadArticle',
  CLEAR_ARTICLE: 'data/clearArticle',
  CREATE_ARTICLE: 'data/createArticle',
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
  clearArticle: () => ({
    type: ActionType.CLEAR_ARTICLE,
  }),
  createArticle: (article) => ({
    type: ActionType.CREATE_ARTICLE,
    payload: article,
  }),
};
