import React from 'react'
import Header from './Header'
import Home from './Home'

class App extends React.Component
{
  
  constructor(props) {
    super(props);
    //this.props.state.response = ''
    //this.forceUpdate();
  }

  /*componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }*/

  /*callApi () {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
      <p>{this.state.response}</p>

    return body;
  }*/

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
