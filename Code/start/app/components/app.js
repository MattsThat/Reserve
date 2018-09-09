import React from 'react'
import Header from './Header'
//import Main from './Main'
import Home from './Home'


//const App = () => (
 // <Main/> 

class App extends React.Component
{
  constructor(props) {
    super(props);
    //this.forceUpdate();
  }
  render() {
    return(
      <div>
      <Header/>
      <br/>
      <br/>
      <br/>
      <Home/>
    </div>
    );
  }
}

export default App
