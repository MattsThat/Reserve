
import  React  from 'react';
import { render } from 'react-dom';
import { Navbar , Nav, NavDropdown, NavItem, MenuItem }  from 'react-bootstrap';

//import Demo from './gridlayout';

import {
    Alignment,
    Button,
    Classes,
    //H5,
    Menu,
    MenuDivider,
    //MenuItem,
    //Icon,
    //Intent,
    Navbar as blueNavbar,
    //NavbarDivider,
    //NavbarGroup,
    //NavbarHeading,
    //Switch,
  } from "@blueprintjs/core";

const rootElement = document.querySelector('#root');
if (rootElement) {

  //render(<Demo/>, rootElement);
  render(
//var App = React.createClass({
  //      render:function(){
        <div>
          <div>
            <blueNavbar>
                <blueNavbar.Group align={Alignment.RIGHT}>
                    <blueNavbar.Heading>Welcome to Sports World</blueNavbar.Heading>
                    <blueNavbar.Divider />
                    <Button className="bp3-minimal" icon="home" text="Home" />
                    <blueNavbar.Divider />
                    <Button className="bp3-minimal" icon="new-person" text="Register" />
                    <blueNavbar.Divider />
                    <Button className="bp3-minimal" icon="log-in" text="Login" />
                    <blueNavbar.Divider />
                </blueNavbar.Group>
            </blueNavbar>
          </div>
          <br/>
          <br/>
          <div>
            <table>
              <tr>
            <Navbar collapseOnSelect fluid>
                <Nav>
                <td width="15%">
                  <NavItem eventKey={1} href="#">
                    Link
                  </NavItem>
                  </td>
                  <td width="15%">
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  </NavDropdown>
                  </td>
                  <td width="15%">
                  <NavDropdown eventKey={3} title="Dropdown11" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  </NavDropdown>
                  </td>
                  <td width="55%"/>
                </Nav>
            </Navbar>
            </tr>
            </table>
          </div>
        </div>
      //  }
    //}
//);
, 
rootElement);
}
//ReactDOM.render(<App/>,document.getElementById("root"));
    