import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing, ClassForm, ClassList, NotFound } from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/study" component={ClassList} />
        <Route path="/give-classes" component={ClassForm} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
