import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Trending from '../../pages/Trending';
import Profil from '../../pages/Profil';
import Navbar from '../Navbar';
import NotFound from '../../pages/NotFound';

const index = () => {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/trending" exact component={Trending} />
            <Route path="/profil" exact component={Profil} />
            <Route path="/*" component={NotFound} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
};

export default index;