import LoginForm from './components/loginForm'

import StLogo from '../../assets/images/st-logo.svg';

import './style.scss';

const Login = (props) => {
    return (
      <div className="login-container">
          <LoginForm />
          <div className="login-image-wrapper"></div>
          <img className="logo" src={StLogo} alt="logo" />
      </div>
    )
  }
  
export default Login;
  