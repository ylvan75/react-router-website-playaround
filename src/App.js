import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavbarContainer from './components/Navbar/NavbarContainer';
import Home from './pages/Home';
import Category from './pages/Category';

export const App = () => {
  return (
    <>
      <Router>
        <NavbarContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/top-rated" exact component={Category} />
        </Switch>
      </Router>
    </>
  );
};
