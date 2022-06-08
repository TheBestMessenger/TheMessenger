import './Login.css';
import SignButton from '../components/LoginReg/SignButton';
import DataInput from '../components/LoginReg/DataInput';
import Subtitle from '../components/LoginReg/Subtitle';
import UserContext from '../contexts/UserContext';
import { BACKEND_SERVER_ROOT } from '../config';
import Logo from '../components/LoginReg/Logo';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const LoginPage = () => {
  const { updateDeviceId } = useContext(UserContext);

  const [redirectToRoot, setRedirectToRoot] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = () => {
    const device_id = uuidv4();
    fetch(BACKEND_SERVER_ROOT + 'login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        device_id: device_id,
        timezoneOffset: new Date().getTimezoneOffset() / 60,
        password: password,
      }),
    })
      .then(async (response) => {
        if (response.status === 200) {
          setUsernameError('');
          setPasswordError('');
          updateDeviceId(device_id);
          setRedirectToRoot(true);
        } else if (response.status === 400) {
          try {
            const errorText = (await response.json()).error;
            if (errorText === 'Username does not exist') {
              setUsernameError(errorText);
              setPasswordError('');
            } else {
              setUsernameError('');
              setPasswordError(errorText);
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

  if (redirectToRoot) return <Navigate to='/' />;

  const eyePath = '/eye.png';
  return (
    <>
      <div className='logo'>
        <Logo path='/logo512.png' text='Sign in to Telegram' />
        <Subtitle text='Please enter your @username and password.' error={0} />
        <form className='signForm' method='post'>
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
          <SignButton info='SIGN IN' onClick={handleSubmit} />
        </form>
        <Subtitle text="Don't have account yet?" error={0} />
        <SignButton info='SIGN UP' />
      </div>
    </>
  );
};

export default LoginPage;
