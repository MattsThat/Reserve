import React from 'react'
import { Card, Elevation } from "@blueprintjs/core";

class Home extends React.Component
{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Card interactive={true} elevation={Elevation.TWO}>
            <h5><a href="#">Card heading</a></h5>
            <p>Card content</p>
        </Card>    
     </div>
    );
  }
}

export default Home

 
