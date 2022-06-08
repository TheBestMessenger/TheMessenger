import "./EditProfile.css"
import UserInfo from "../UserInfo/UserInfo";
const EditProfile = (props) =>{
    const {edit,editText,close} = props;
    return(
        <div className = "editContent">
            <h4 className='profileEditText'>{props.editText}</h4>
            <textarea className='changeProfileText'></textarea>
            <button type="submit" className='btn'
            onClick={() => {
                document.querySelector(props.close).style.display = 'none';
                document.querySelector('.modal-content').style.background = "#212121";
                document.querySelector('.modal-content').style.opacity = 1;
            }}
            >Submit</button>
            <div
                 className='close'
                 onClick={() => {
                     document.querySelector(props.close).style.display = 'none';
                     document.querySelector('.modal-content').style.background = "#212121";
                     document.querySelector('.modal-content').style.opacity = 1;
                 }}
             >
                 {''}+{''}
             </div>
        </div>
    )

}

export default EditProfile