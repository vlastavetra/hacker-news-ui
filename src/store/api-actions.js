import {ActionCreator} from './action';

const newsСount = 100;
const prettify = '.json?print=pretty';
const PATH = {
  all: '/newstories',
  item: '/item/',
};

export const loadArticles = (ids) => async (dispatch, _getState, api) => {
  const data = await Promise.all(ids.map((id) => api.get(`${PATH.item}${id}${prettify}`)));

  dispatch(ActionCreator.loadNews(data.map((item) => item.data)));
};

export const loadNews = () => async (dispatch, _getState, api) => {
  dispatch(ActionCreator.resetNews());

  return api.get(`${PATH.all}${prettify}`)
    .then(({data}) => dispatch(loadArticles(data.slice(0, newsСount))));
};

export const loadArticle = (id) => (dispatch, _getState, api) => {
  api.get(`${PATH.item}${id}${prettify}`)
    .then(({data}) => dispatch(ActionCreator.loadArticle(data)));
};

export const loadComments = () => async (dispatch, _getState, api) => {
  const ids = _getState().article.kids;
  const data = await Promise.all(ids.map((id) => api.get(`${PATH.item}${id}${prettify}`)));

  dispatch(ActionCreator.loadComments(data.map((item) => item.data)));
};

export const loadSubComments = (ids) => async (dispatch, _getState, api) => {
  const subComments = _getState().subComments;
  const data = await Promise.all(ids.map((id) => api.get(`${PATH.item}${id}${prettify}`)));
  data.map((item) => subComments.push(item.data));

  dispatch(ActionCreator.loadSubComments(subComments));
};
