import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Events from '../pages/Events';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/eventos" exact component={Events} />
    </Switch>
  );
}

export default Routes;
