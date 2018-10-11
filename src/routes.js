import React from 'react'
import { render } from 'react-dom'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import Home from './components/Home';
import Login from './components/login';
import NotFoundPage from './components/notfound';
import LoginEmail from './components/loginemail';
import FacebookLogin from './components/facebooklogin';
import GoogleLogin from './components/googlelogin';
import TwitterLogin from './components/twitterlogin';
//import { Switch } from './node_modules/@blueprintjs/core';

//const routes = () => (
  render(
  <Router history={history}>
  <div>
    <Switch>
        <Route  exact path="/" component={App}/>
        <Route  path='/signup' component={Login}/>
        <Route  path="/home" component={Home}/>
        <Route  exact path='/email' component={LoginEmail}/>
        <Route  path='/facebook' component={FacebookLogin}/>
        <Route  path='/google' component={GoogleLogin}/>
        <Route  path='/twitter'component={TwitterLogin}/>
        <Route  path="*" component={NotFoundPage}/>
    </Switch>
    </div>
  </Router>, document.getElementById('root')
);

//    <IndexRoute component={Home}/>

//export default routes