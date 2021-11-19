import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '../../commonComponents/textField';

import userIcon from '../../../assets/images/user-icon.svg';
import userEmailIcon from '../../../assets/images/user-email-icon.svg';
import userPasswordIcon from '../../../assets/images/user-password-icon.svg';

const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (fieldType, value) => {
    if(fieldType === 'username') {
      setUserName(value);
      setNameError('');
    } else if(fieldType === 'useremail') {
      setUserEmail(value);
      setEmailError('');
    } else if(fieldType === 'password') {
      setPassword(value);
      setPasswordError('');
    }
  }

  const proceedToSignup = () => {
    const isInvalid = validateFields();
    
    if(!isInvalid) {
      //Redirect to homepage
      navigate('/home');
    }
  };

  const validateFields = () => {
    let invalidName = false, invalidPassword = false, invalidEmail = false;
    if(userName === '') {
      invalidName = true;
      setNameError('Invalid Name')
    }
    if(!emailRegEx.test(String(userEmail).toLowerCase())) {
      invalidEmail = true;
      setEmailError('Invalid Email')
    }
    if(password.length < 6) {
      invalidPassword = true;
      setPasswordError('Password must be at least 6 characters long.')
    }

    return (invalidName || invalidEmail || invalidPassword)

  };

  const toggleCheckBox = () => {
    setTermsAccepted((termsAccepted) => !termsAccepted);
  }

  return (
    <div className="login-form">
      <div className="title">Let’s Get Started.</div>
      <div className="desc">Discover the best places in the world at your fingertips!.</div>
      <TextField
        className="username"
        icon={userIcon}
        fieldType={'username'}
        type={'text'}
        value={userName}
        placeholder={'Name'}
        onChange={handleInputChange}
        errorMsg={nameError}
      />
      <TextField
        className="email"
        icon={userEmailIcon}
        fieldType={'useremail'}
        type={'text'}
        value={userEmail}
        placeholder={'Email'}
        onChange={handleInputChange}
        errorMsg={emailError}
      />
      <TextField
        className="password"
        icon={userPasswordIcon}
        fieldType={'password'}
        type={'password'}
        value={password}
        placeholder={'Password'}
        onChange={handleInputChange}
        errorMsg={passwordError}
      />
      <div className="terms-and-condition">
        <input
          className="checkbox"
          type="checkbox"
          checked={termsAccepted}
          name="isChecked"
          onChange={toggleCheckBox}
        />
        <div className="text">I agree to the <span>Terms</span> and <span>Privacy Policy.</span></div>
      </div>
      <div className={"btn-wrapper" + (!termsAccepted ? ' disabled': '')}>
        <button
          className={'signup-btn'}
          onClick={proceedToSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  )
  }
  
  export default LoginForm;
  