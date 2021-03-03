import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import './index.css';

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/'>
            <Home />
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
