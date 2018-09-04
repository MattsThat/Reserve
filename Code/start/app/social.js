
import  React  from 'react';
import { render } from 'react-dom';
import SocialButton from './SocialButton'

const rootElement = document.querySelector('#root1');

const handleSocialLogin = (user) => {
  console.log(user)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
}

if (rootElement) {

  //render(<Demo/>, rootElement);
  render(
//var App = React.createClass({
  //      render:function(){
        <div>
          <SocialButton
            provider='facebook'
            appId='YOUR_APP_ID'
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
          >
            Login with Facebook
          </SocialButton>
        </div>
      //  }
    //}
//);
, 
rootElement);
}
//ReactDOM.render(<App/>,document.getElementById("root"));
    