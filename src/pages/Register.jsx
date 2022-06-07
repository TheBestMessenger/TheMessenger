import './Register.css';
import SignButton from '../components/LoginReg/SignButton';
import DataInput from '../components/LoginReg/DataInput';
import Subtitle from '../components/LoginReg/Subtitle';
import Logo from '../components/LoginReg/Logo';

const RegisterPage = () => {
  return (
    <>
        <div class='logo'>
            <Logo path='/logo512.png' text='Sign up to Telegram'/>
            <Subtitle text='Please enter info about you.'/>
            <form method='post'>
                <DataInput info='Name Surname'/>
                <DataInput info='@username'/>
                <DataInput info='Password'/>
                <DataInput info='Password Check'/>
                <SignButton info='SIGN UP'/>
            </form>
        </div>
    </>
  );
};

export default RegisterPage;
