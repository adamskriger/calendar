import App from './components/App.jsx'
import React from 'react';
import About from './components/About'
import Blogger from './components/Blogger'
import BlogShow from './components/BlogShow'

import {Router, Route, IndexRoute} from 'react-router';



export default (
<Router>
<Route path="/" component={App}>
  <Route path="/event" component={Event} />

</Route>
</Router>

);
