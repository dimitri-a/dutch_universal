'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Cart from './components/cart.jsx';

const routes = (
  <Route path="/">
    <IndexRoute component={Cart}/>
    {/*<Route path="athlete/:id" component={AthletePage}/>*/}
    {/*<Route path="*" component={NotFoundPage}/>*/}
  </Route>
);

export default routes;
