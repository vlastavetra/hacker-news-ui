import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../pages/Main';
import Article from '../pages/Article';
import Error from '../pages/Error';
import '../../styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>
        <Route path="/:id" exact component={Article} />
        <Route>
          <Error/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
