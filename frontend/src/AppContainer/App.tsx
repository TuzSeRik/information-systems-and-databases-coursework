import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Header} from '../commonComponents/HeaderPanel/Header';
import {Footer} from '../commonComponents/FooterPanel/Footer';
import {Authorisation} from '../authorisationPage/AuthorisationContainer/Authorisation';
import {Main} from '../mainPage/MainContainer/Main';
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
