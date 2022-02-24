import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ArticlePage from '../pages/ArticlePage';
import ErrorPage from '../pages/ErrorPage';
import '../../styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/:id" exact component={ArticlePage} />
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
