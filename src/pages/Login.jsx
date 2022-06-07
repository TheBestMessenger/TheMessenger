import './Login.css';

const LoginPage = () => {
  return (
    <>
      <div class='logo'>
        <img className='logo-img' src='/logo512.png' alt='logo' />
        <span className='sign-in'>Sign in to Telegram</span>
        <div className='subtitle'>
          <span className='info'>Please enter your username and password.</span>
        </div>
        <form className='sign-in' method='post'>
          <div className='phone-num'>
            <input type='text' id='phone' required />
            <label className='label-login'>Username</label>
          </div>
          <div className='password'>
            <input type='password' id='password' required />
            <label className='label-login'>Password</label>
          </div>
          <button className='sign-button' type='button'>
            SIGN IN
          </button>
        </form>
        <div className='subtitle2'>
          <span className='info'>Don't have account yet?</span>
        </div>
        <button className='sign-up-button' type='button'>
          SIGN UP
        </button>
      </div>
    </>
  );
};

export default LoginPage;
