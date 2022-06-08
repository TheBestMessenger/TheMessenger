import './Logo.css'

const Logo = (props) => {
    return (
        <>
            <img className='logo-img' src={props.path} alt='logo' />
            <span className='sign'>{props.text}</span>
        </>
    )
}

export default Logo