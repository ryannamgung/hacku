import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';
import Navbar from './Navbar.js';
import Searchbar from './Searchbar.js';
import Companies from './Companies.js';
import CompanyInfo from './CompanyInfo.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
        <Switch>
        <Route exact path="/" render={() => <Redirect to="/home"/>} />
        <Route exact path="/home" component={Searchbar}/>
        <Route exact path="/companies" component={Companies}/>
        <Route exact path="/company-info" component={CompanyInfo}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
