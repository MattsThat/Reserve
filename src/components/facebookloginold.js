import React from 'react'
//import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'
//import { Button } from "react-bootstrap"
import Dashboard from './Dashboard/Dashboard';
import { Button , Modal } from "react-bootstrap"
import { Link } from 'react-router-dom'


  /**
   *          
   * 
   */
class FacebookLoginold extends React.Component {

  constructor(props) {
    super(props);
  }//end of constructor

  render(){
    
    return(
      <div>
        FacebookLogin
        <Dashboard/> 
        <Link to = '/home'>
            <Button bsStyle="primary" className="bp3-minimal">Back
            </Button> 
        </Link>
      </div>
    );//end of return
  }//end of render
}//end of class

export default FacebookLoginold
