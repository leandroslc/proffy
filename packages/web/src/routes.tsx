import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing, TeacherForm, TeacherList, NotFound } from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
