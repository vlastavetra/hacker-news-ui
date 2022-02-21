import axios from 'axios';

const baseURL = 'https://hacker-news.firebaseio.com/v0/';
const timeout = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: baseURL,
    timeout: timeout,
  });

  return api;
};
