import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Header} from './HeaderPanel/Header';
import {Footer} from './FooterPanel/Footer';
import {Authorisation} from '../AuthorisationContainer/Authorisation';
import {Main} from '../MainContainer/Main';
import './App.css';

export function App() {
  return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Authorisation} />
          <Route path="/main" component={Main} />
        </Switch>
        <Footer />
      </div>
  );
}
