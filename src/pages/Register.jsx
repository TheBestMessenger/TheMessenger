import './Register.css';
import SignButton from '../components/LoginReg/SignButton';
import DataInput from '../components/LoginReg/DataInput';
import Subtitle from '../components/LoginReg/Subtitle';
import Logo from '../components/LoginReg/Logo';

const RegisterPage = () => {
  const eyePath = '/eye.png';
  return (
    <>
        <div className='logo'>
            <Logo path='/logo512.png' text='Sign up to Telegram'/>
            <Subtitle text='Please enter info about you.' error={0}/>
            <form className='regForm' method='post'>
                <DataInput info='Name Surname' path={eyePath} error=''/>
                <DataInput info='@username' path={eyePath} error=''/>
                <DataInput info='Password' path={eyePath} error=''/>
                <DataInput info='Password Check' path={eyePath} error='Password is incorrect'/>
                <SignButton info='SIGN UP'/>
            </form>
        </div>
    </>
  );
};

export default RegisterPage;
