import React from 'react'
import Header from './Header/Header'
import Home from './Home'
import CarouselHP from './carouselhp'
//import htmlContent from './../static/hello.html';


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
      /*<div dangerouslySetInnerHTML={ {__html: htmlContent} } />*/
      <div>
      <Header/>
      <br/>
      <CarouselHP/>
      <br/>
      <br/>
      <Home/>
    </div>
    );
  }
}

export default App
