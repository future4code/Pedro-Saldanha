import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial';
import TelaMatches from './pages/TelaMatches';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App path="/" exact={true} component={App} />
      <Route path="/matches" component={TelaMatches} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

