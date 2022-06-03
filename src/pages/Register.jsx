import './Register.css';

const Register = () => {
  return (
    <>
      <div className='logo'>
        <img className='logo-img' src='/logo512.png' alt='logo' />
        <span className='sign-up-text'>Sign up in Telegram</span>
        <div className='subtitle'>
          <span className='info'>
            Please enter your phone number and password.
          </span>
        </div>
        <form className='sign-up' method='post'>
          <div className='phone-num'>
            <input type='text' id='phone' required />
            <label>Phone number</label>
          </div>
          <div className='password'>
            <input type='password' id='password' required />
            <label>Password</label>
          </div>
          <div className='password-check'>
            <input type='password' id='password-check' required />
            <label>Confirm Password</label>
          </div>
          <button className='sign-up-button' type='button'>
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
