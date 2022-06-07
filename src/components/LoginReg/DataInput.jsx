import "./DataInput.css"

const DataInput = (props) => {
    return (
        <>
            <div className='sign-input'>
                <input type='text' id={props.info} required />
                <label className='sign-label'>{props.info}</label>
            </div>
        </>
    )   
}

export default DataInput