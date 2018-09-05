import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login'


const Main = () => (
  <main>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Login}/>
    </Switch>
  </main>
)

export default Main
