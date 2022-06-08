import './Subtitle.css';

const Subtitle = (props) => {
    let clas = '';
    if (props.error === 0) {
        clas = 'info';
    }
    else {
        clas = 'info-err';
    }
    return (
        <>
            <div className='subtitle'>
                <span className={clas}>
                    {props.text}
                </span>
            </div>
        </>
    )
}

export default Subtitle