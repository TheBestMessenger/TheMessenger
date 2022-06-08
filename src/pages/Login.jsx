import './Login.css';
import SignButton from '../components/LoginReg/SignButton';
import DataInput from '../components/LoginReg/DataInput';
import Subtitle from '../components/LoginReg/Subtitle';
import Logo from '../components/LoginReg/Logo';

const LoginPage = () => {
  const eyePath = '/eye.png';
  return (
    <>
      <div class='logo'>
        <Logo path='/logo512.png' text='Sign in to Telegram'/>
        <Subtitle text='Please enter your @username and password.' error={0}/>
        <form className='signForm' method='post'>
          <DataInput info='@username' path={eyePath} error='username is incorrect'/>
          <DataInput info='Password' path={eyePath} error='Password is incorrect'/>
          <SignButton info='SIGN IN'/>
        </form>
        <Subtitle text="Don't have account yet?" error={0}/>
        <SignButton info='SIGN UP'/>
      </div>
    </>
  );
};

export default LoginPage;
