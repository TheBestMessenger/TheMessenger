import './Register.css';
import SignButton from '../components/LoginReg/SignButton';
import DataInput from '../components/LoginReg/DataInput';
import Subtitle from '../components/LoginReg/Subtitle';
import { BACKEND_SERVER_ROOT } from '../config';
import Logo from '../components/LoginReg/Logo';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const RegisterPage = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');

  const handleSubmit = () => {
    setNameError('');
    setUsernameError('');
    setPasswordError('');
    setPasswordCheckError('');
    if (name === '') {
      setNameError('Name empty');
      return;
    }
    if (username === '') {
      setUsernameError('Username empty');
      return;
    }
    if (password === '') {
      setPasswordError('Password empty');
      return;
    }
    if (password !== passwordCheck) {
      setPasswordCheckError('Passwords mismatch');
      return;
    }
    fetch(BACKEND_SERVER_ROOT + 'register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
      }),
    })
      .then(async (response) => {
        if (response.status === 200) {
          setRedirectToLogin(true);
        } else if (response.status === 400) {
          try {
            const errorText = (await response.json()).error;
            if (errorText === 'Username exists') {
              setUsernameError(errorText);
            } else {
              console.log('Unhandled 400 error: ' + errorText);
            }
          } catch (error) {
            console.log('Message decoding error: ', error);
          }
        } else {
          console.log('Error: response status: ', response.status);
        }
      })
      .catch((err) => {
        console.log('Message fetching error: ', err);
      });
  };

  if (redirectToLogin) return <Navigate to='/login' />;

  const eyePath = '/eye.png';
  return (
    <>
      <div className='logo'>
        <Logo path='/logo512.png' text='Sign up to Telegram' />
        <Subtitle text='Please enter info about you.' error={0} />
        <form className='regForm' method='post'>
          <DataInput
            info='Name Surname'
            path={eyePath}
            error={nameError}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <DataInput
            info='@username'
            path={eyePath}
            error={usernameError}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <DataInput
            info='Password'
            path={eyePath}
            error={passwordError}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <DataInput
            info='Password Check'
            path={eyePath}
            error={passwordCheckError}
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          <SignButton info='SIGN UP' onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
