import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Thanks from './pages/Thanks';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignUp}/>
        <Route path="/Obrigado" component={Thanks}/>
      </Switch>
    </BrowserRouter>
  );
}