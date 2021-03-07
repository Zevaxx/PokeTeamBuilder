import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </>
);
