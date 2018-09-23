import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import AppRoutes from './components/AppRoutes';

render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));

//ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
//    <App/>
