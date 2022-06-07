import './Login.css';
import SignButton from '../components/LoginReg/SignButton';
import DataInput from '../components/LoginReg/DataInput';
import Subtitle from '../components/LoginReg/Subtitle';
import Logo from '../components/LoginReg/Logo';

const LoginPage = () => {
  return (
    <>
      <div class='logo'>
        <Logo path='/logo512.png' text='Sign in to Telegram'/>
        <Subtitle text='Please enter your @username and password.'/>
        <form method='post'>
          <DataInput info='@username'/>
          <DataInput info='Password'/>
          <SignButton info='SIGN IN'/>
        </form>
        <Subtitle text="Don't have account yet?"/>
        <SignButton info='SIGN UP'/>
      </div>
    </>
  );
};

export default LoginPage;
