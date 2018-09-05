
import  React  from 'react';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import {Button, Modal} from "react-bootstrap"

function handleFacebookLogin (){
  alert("hello facebook");
  //console.log(user);
}

function handleGoogleLogin (){
  alert("hello google");
  //console.log(user);
}

function handleTwitterLogin () {
  alert("hello twitter");
  //console.log(user);
}

function handleClose(){
   // this.setState({ showModal: false });
    //alert("closing");
}
/*
Need to try the Modal Component. Its not working as per plan.

*/


const Login = () => (

        <div className="static-modal">

              <Modal.Dialog>
                <Modal.Header>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body align="center">
                <Button>
                  <FacebookLoginButton onClick={handleFacebookLogin}/>
                </Button>
                <br/>
                <Button>
                  <GoogleLoginButton onClick={handleGoogleLogin}/>
                  </Button>
                <br/>
                <Button>
                  <TwitterLoginButton onClick={handleTwitterLogin}/>
                </Button>
                <br/>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
              </Modal.Dialog>
        </div>
)
export default Login    