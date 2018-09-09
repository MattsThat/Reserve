import React from 'react'
import {FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'
import { Button } from "react-bootstrap"



function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
//const Main = () => (
  /**
   *          
   * 
   */
class LoginEmail extends React.Component {

  constructor(props) {
    super(props);
  }//end of constructor

  render(){
    
    return(
      <div>
         <form>
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
            />
            <FieldGroup id="formControlsPassword" label="Password" type="password" />
            <FormGroup>
              <ControlLabel>Static text</ControlLabel>
              <FormControl.Static>email@example.com</FormControl.Static>
            </FormGroup>
            <Button type="submit">Submit</Button>
         </form>
    </div>
    );//end of return
  }//end of render
}//end of class

export default LoginEmail
