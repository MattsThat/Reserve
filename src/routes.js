import React from 'react'
import { render } from 'react-dom'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
//import { Switch, Route, Router } from 'react-router-dom'
import App from './components/App';
//import Home from './components/Home';
import Login from './components/login';
import NotFoundPage from './components/notfound';
import LoginEmail from './components/loginemail';
//import FacebookSignUp from './components/facebooklogin';
import GoogleLogin from './components/googlelogin';
import TwitterLogin from './components/twitterlogin';
import Dashboard from './components/Dashboard/Dashboard';
//import { Switch } from './node_modules/@blueprintjs/core';

//const routes = () => (
  render(
  <Router>
  <div>
    <Switch>
        <Route  exact path="/" component={App}/>
        <Route  path='/signup' component={Login}/>
        <Route  path="/home" component={App}/>
        <Route  exact path='/email' component={LoginEmail}/>
        <Route  path='/facebook' component={Dashboard}/>
        <Route  path='/google' component={Dashboard}/>
        <Route  path='/twitter'component={TwitterLogin}/>
        <Route  path="*" component={NotFoundPage}/>
    </Switch>
    </div>
  </Router>, document.getElementById('root')
);

//    <IndexRoute component={Home}/>

//export default routes