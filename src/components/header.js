
import  React  from 'react';
//import { render } from 'react-dom';
//import { Navbar , Nav, NavDropdown, NavItem, MenuItem }  from 'react-bootstrap';
import {  Link } from 'react-router-dom'

/* Horizontal menu removied from header.
          <div>
            <Navbar collapseOnSelect fluid>
                <Nav>
                  <NavItem eventKey={1} href="#">
                    Link
                  </NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  </NavDropdown>
                  <NavDropdown eventKey={3} title="Dropdown11" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  </NavDropdown>
                </Nav>
            </Navbar>
          </div>

                    <Switch>
            <Route path='/signup' component={Login} />
            <Route exact path='/'/>
          </Switch>
        <div>
         {routes}
         </div>


*/
import {
    Alignment,
    Button,
    Navbar as BlueNavbar,
  } from "@blueprintjs/core";

  class Header extends React.Component {

    render() {
      return(
         <div>
            <BlueNavbar>
                <BlueNavbar.Group align={Alignment.RIGHT}>
                    <BlueNavbar.Heading>Welcome to Sports World</BlueNavbar.Heading>
                    <BlueNavbar.Divider />
                    <Link to='/home'>
                    <Button className="bp3-minimal" icon="home" text="Home"/>
                    </Link>
                    <BlueNavbar.Divider />
                    <Link to='/signup'>
                    <Button className="bp3-minimal" icon="new-person" text="Sign up"/>
                    </Link>
                    <BlueNavbar.Divider />
                    <Link to='/signup'>
                    <Button className="bp3-minimal" icon="log-in" text="Login" />
                    </Link>
                    <BlueNavbar.Divider />
                </BlueNavbar.Group>
            </BlueNavbar>
          <br/>
          <br/>
          </div>
        );//end of return
    }//end of render
  }//end of class

export default Header
    