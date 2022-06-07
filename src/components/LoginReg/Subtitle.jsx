import './Subtitle.css';

const Subtitle = (props) => {
    return (
        <>
            <div className='subtitle'>
                <span className='info'>
                    {props.text}
                </span>
            </div>
        </>
    )
}

export default Subtitle