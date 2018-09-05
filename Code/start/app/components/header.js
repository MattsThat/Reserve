
import  React  from 'react';
//import { render } from 'react-dom';
//import { Navbar , Nav, NavDropdown, NavItem, MenuItem }  from 'react-bootstrap';
import { Link } from 'react-router-dom'

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

*/
import {
    Alignment,
    Button,
    Navbar as blueNavbar,
  } from "@blueprintjs/core";

  const Header = () => (
        <div>
          <div>
            <blueNavbar>
                <blueNavbar.Group align={Alignment.RIGHT}>
                    <blueNavbar.Heading>Welcome to Sports World</blueNavbar.Heading>
                    <blueNavbar.Divider />
                    <Link to='/'>
                    <Button className="bp3-minimal" icon="home" text="Home"/>
                    </Link>
                    <blueNavbar.Divider />
                    <Link to='/signup'>
                    <Button className="bp3-minimal" icon="new-person" text="Sign up"/>
                    </Link>
                    <blueNavbar.Divider />
                    <Link to='/login'>
                    <Button className="bp3-minimal" icon="log-in" text="Login" />
                    </Link>
                    <blueNavbar.Divider />
                </blueNavbar.Group>
            </blueNavbar>
          </div>
          <br/>
          <br/>
        </div>
)

export default Header
    