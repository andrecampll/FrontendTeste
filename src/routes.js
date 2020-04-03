import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import pageOne from './pages/pageOne';
import pageTwo from './pages/pageTwo';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={pageOne}/>
        <Route path="/pageTwo" component={pageTwo}/>
      </Switch>
    </BrowserRouter>
  );
}