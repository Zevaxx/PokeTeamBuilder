import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Search } from './components/Search';

export const App = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Search />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </>
);
