import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './pages/home';
import Contact from './pages/contact';

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
