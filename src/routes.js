import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import App from './components/App';
import Home from './components/Home';
import Login from './components/login'
import NotFoundPage from './components/notfound';
import LoginEmail from './components/loginemail';
import FacebookLogin from './components/facebooklogin';
import GoogleLogin from './components/googlelogin';
import TwitterLogin from './components/twitterlogin';
import { Switch } from './node_modules/@blueprintjs/core';

const routes = () => (

  <BrowserRouter>
    <Route exact path="/" component={App}/>
    <Route exact path='/signup' component={Login}/>
    <Route exact path="*" component={NotFoundPage}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path='/signup/email' component={LoginEmail}/>
    <Route exact path='/signup/facebook' component={FacebookLogin}/>
    <Route exact path='/signup/google' component={GoogleLogin}/>
    <Route exact path='/signup/twitter'component={TwitterLogin}/>
  </BrowserRouter>

);
//    <IndexRoute component={Home}/>

export default routes