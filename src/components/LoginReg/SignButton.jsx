import './SignButton.css'

const SignButton = (props) => {
    return (
        <>
            <button className='sign-button' type='button'>
            {props.info}
            </button>
        </>
    )
    
}

export default SignButton