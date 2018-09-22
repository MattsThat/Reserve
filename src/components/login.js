
import  React  from 'react';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { Button, Modal } from "react-bootstrap"
import LoginEmail from './loginemail';
import FacebookLogin from './facebooklogin';
import GoogleLogin from './googlelogin';
import TwitterLogin from './twitterlogin';

import { Link, Switch, Route } from 'react-router-dom'
//import Home from './Home'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.state = {
                show: true
            };
        // preserve the initial state in a new object
        //this.baseState = this.state 
    }

    handleShow() {
        this.setState({ show: true });
    }
    
    handleHide() {
        this.setState({ show: false });
        //this.setState(this.baseState);
    }

    render() {

        const { match } = this.props;

        return(
        <div>
            <Modal
             {...this.props}
             show={this.state.show}
             onHide={this.handleHide}
             keyboard="true"
             dialogClassName="custom-modal"
            >
                <Modal.Header closeButton="true">
                      <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body align="center">
                    <Link to={`${match.url}/facebook`}>
                        <FacebookLoginButton onClick={this.handleHide}/>
                    </Link>
                    <br/>
                    <Link to={`${match.url}/google`}>
                        <GoogleLoginButton onClick={this.handleHide}/>
                    </Link>
                    <br/>
                    <Link to={`${match.url}/twitter`}>
                        <TwitterLoginButton onClick={this.handleHide}/>
                    </Link>
                    <br/>
                    <Link to={`${match.url}/email`}>
                        <Button bsStyle="primary" className="bp3-minimal" onClick={this.handleHide}>Register with Email
                        </Button> 
                    </Link>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleHide}>Close</Button>
                </Modal.Footer>
            </Modal> 
            <Switch>
                <Route exact path='/signup/email' component={LoginEmail}/>
                <Route exact path='/signup/facebook' component={FacebookLogin}/>
                <Route exact path='/signup/google' component={GoogleLogin}/>
                <Route exact path='/signup/twitter'component={TwitterLogin}/>
            </Switch>
        </div>
        );
    }//end of render
}//end of class
export default Login    