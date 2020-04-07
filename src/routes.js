import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from './pages/SignUp';
import pageTwo from './pages/pageTwo';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignUp}/>
        <Route path="/pageTwo" component={pageTwo}/>
      </Switch>
    </BrowserRouter>
  );
}