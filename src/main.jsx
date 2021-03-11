import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Work from './pages/work';
import PrivacyPolicy from './pages/privacy-policy';
import './index.css';

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/work'>
            <Work />
          </Route>
          <Route exact path='/privacy-policy'>
            <PrivacyPolicy />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
