import './SignButton.css';

const SignButton = (props) => {
  return (
    <>
      <button className='sign-button' type='button' onClick={props.onClick}>
        {props.info}
      </button>
    </>
  );
};

export default SignButton;
