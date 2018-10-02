
import  React  from 'react';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { Button , Modal } from "react-bootstrap"
import { Link } from 'react-router-dom'
//import Home from './Home'

/*
               
            <Switch>
                <Route exact path='/signup/email' component={LoginEmail}/>
                <Route exact path='/signup/facebook' component={FacebookLogin}/>
                <Route exact path='/signup/google' component={GoogleLogin}/>
                <Route exact path='/signup/twitter'component={TwitterLogin}/>
            </Switch>

*/

class Login extends React.Component {

    constructor(props) {
       // alert("hello");
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
       // alert("hello1");
        this.setState({ show: true });
    }
    
    handleHide() {
        //alert("hello2");
        this.setState({ show: false });
        //this.setState(this.baseState);
    }

    render() {
        //const { match } = this.props;

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
                <Link to = '/facebook'>
                        <FacebookLoginButton onClick={this.handleHide}/>
                    </Link>
                    <br/>
                    <Link to = '/google'>
                        <GoogleLoginButton onClick={this.handleHide}/>
                    </Link>
                    <br/>
                    <Link to = '/twitter'>
                        <TwitterLoginButton onClick={this.handleHide}/>
                    </Link>
                    <br/>
                    <Link to = '/email'>
                        <Button bsStyle="primary" className="bp3-minimal" onClick={this.handleHide}>Register with Email
                        </Button> 
                    </Link>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleHide}>Close</Button>
                </Modal.Footer>
            </Modal> 
        </div>
        );
    }//end of render
    //    <Link to={`${match.url}/email`}>

}//end of class
export default Login    