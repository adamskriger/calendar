import App from './components/App.jsx'
import React from 'react';

import {Router, Route, IndexRoute} from 'react-router';



export default (
<Router>
<Route path="/" component={App}>
  <Route path="/event" component={Event} />

</Route>
</Router>

);
