import "./Login.css";

const LoginPage = () => {
  return (
    <>
      <div class="logo">
        <img className="logo_img" src="/logo512.png" alt="logo"></img>
        <span className="sign_in">Sign in to Telegram</span>
        <div className="subtitle">
          <span className="info">
            Please enter your phone number and password.
          </span>
        </div>
        <form className="sign-in" method="post">
          <div className="phone_num">
            <input type="text" id="phone" required />
            <label className="label-login">Phone number</label>
          </div>
          <div className="password">
            <input type="password" id="password" required />
            <label className="label-login">Password</label>
          </div>
          <button className="sign-button" type="button">
            SIGN IN
          </button>
        </form>
        <div className="subtitle2">
          <span className="info">Don't have account yet?</span>
        </div>
        <button className="sign-up-button" type="button">
          SIGN UP
        </button>
      </div>
    </>
  );
};

export default LoginPage;
