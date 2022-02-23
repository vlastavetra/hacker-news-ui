import {ActionCreator} from './action';

const newsСount = 100;
const prettify = '.json?print=pretty';
const PATH = {
  all: '/newstories',
  article: '/item/',
};

export const loadNews = () => async (dispatch, _getState, api) => {
  const allNewsResponse = await api.get(`${PATH.all}${prettify}`);
  const idList = allNewsResponse.data.slice(0, newsСount);
  const newsResponse = await Promise.all(idList.map((id) => api.get(`${PATH.article}${id}${prettify}`)));
  const newsArray = newsResponse.map((item) => item.data);

  dispatch(ActionCreator.loadNews(newsArray));
};

export const loadArticle = (id) => (dispatch, _getState, api) => {
  api.get(`${PATH.article}${id}${prettify}`)
    .then(({data}) => dispatch(ActionCreator.loadArticle(data)));
};
