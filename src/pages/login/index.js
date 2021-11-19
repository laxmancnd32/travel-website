
import LoginForm from './components/loginForm'
import './style.scss';

const Login = (props) => {
    return (
      <div className="login-container">
          <LoginForm />
          <div className="login-image-wrapper"></div>
      </div>
    )
  }
  
export default Login;
  