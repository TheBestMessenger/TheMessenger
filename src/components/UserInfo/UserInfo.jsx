import './UserInfo.css';
import {PROFILE_PICTURES_PREFIX} from '../../config';
import EditProfile from "../EditProfile/EditProfile"
const UserInfo = (props) => {
    const { username,nickname, telephone, photo,edit} = props;
    const boolEdit = props.edit; 
    return(
        <>
            <button
                type='button'
                id='button'
                className='button'
                onClick={() => {
                    document.querySelector('.bg-modal').style.display = 'flex';
                }}
            >
                <img
                    className='button-image'
                    src={props.photo}
                    alt={'button'}
                />
            </button>

        <div className='bg-modal'>
                <div className='modal-content'>
                    <img
                        className='image-profile'
                        src={props.photo}
                        alt={'profile image'}
                    />
                    <p className='profile-name'> {props.username} </p>

                    <p className='online-status'> online </p>
                    <div
                        className='close'
                        onClick={() => {
                            document.querySelector('.bg-modal').style.display = 'none';
                        }}
                    >
                        {''}+{''}
                    </div>

                     <div className='icons_outer'>

                        <button className = "icon_inner"
                        type='button'
                        id='button'
                        onClick={() => {
                            if(props.edit){
                            document.querySelector('.editWindow1').style.display="flex";
                            document.querySelector('.modal-content').style.opacity = 0.25;
                            
                            document.querySelector('.modal-content').style.background = "black";
                        }
                         }}
                        >
                            <img
                                className='imgicon'
                                src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iI2ZiOGYzNiI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNTQuNzgyOCw3OC44MTYxM2MwLDI2LjAxNzg3IC0xMi42NDIsNDIuMTIyOCAtMzMuMjI0NjcsNDIuMTIyOGMtMTAuNjU4MjcsMCAtMTguMjY2NCwtNC42MjY4IC0yMC40OTY2NywtMTIuNDdoLTEuNTcwOTNjLTMuMzg4NCw4LjM0MiAtOS44MzI2NywxMi41NTYgLTE5LjMzODUzLDEyLjU1NmMtMTcuMTg4NTMsMCAtMjguNTkyMTMsLTEzLjg3NDY3IC0yOC41OTIxMywtMzQuODUyOTNjMCwtMjAuMDcyNCAxMC45OTA4LC0zMy42MTQ1MyAyNy4zNTM3MywtMzMuNjE0NTNjOC45MjY4LDAgMTUuOTUwMTMsNC4yOTQyNyAxOS4yNTgyNywxMS43MzA0aDEuNTcwOTN2LTkuNzQ2NjdoMTkuMDA2djQxLjk1NjUzYzAsNS44NjUyIDIuNjQzMDcsOS4zMzM4NyA3LjEwOTMzLDkuMzMzODdjNy4yNjk4NywwIDExLjkwMjQsLTkuNjYwNjcgMTEuOTAyNCwtMjUuMDI2YzAsLTI5Ljg5OTMzIC0xOS41ODUwNywtNDkuMDYwMTMgLTUwLjA4MDY3LC00OS4wNjAxM2MtMzEuODIsMCAtNTMuNDY5MDcsMjIuMzAyNjcgLTUzLjQ2OTA3LDU0Ljc1OTA3YzAsMzIuODY5MiAyMS44MTUzMyw1My40NDA0IDU2Ljg1NzQ3LDUzLjQ0MDRjNy42MDI0LDAgMTUuNDUxMzMsLTAuOTkxODcgMTkuNzUxMzMsLTIuMzEwNTN2MTQuNzAwMjdjLTUuOTUxMiwxLjU1OTQ3IC0xMy43MTk4NywyLjQ2NTMzIC0yMS41NzQ1MywyLjQ2NTMzYy00My4yMTc4NywwIC03Mi4wNjIyNywtMjcuNTAyOCAtNzIuMDYyMjcsLTY4LjcxOTczYzAsLTQwLjcxODEzIDI4LjkyNDY3LC02OC44ODAyNyA3MC43NDM2LC02OC44ODAyN2MzOS44MzUyLDAgNjYuODU2NCwyNC45NDU3MyA2Ni44NTY0LDYxLjYxNjEzek03My4yOTQ5Myw4Ni43NDUzM2MwLDEwLjczODUzIDQuNDYwNTMsMTcuMTc3MDcgMTEuOTgyNjcsMTcuMTc3MDdjNy42MDI0LDAgMTIuMjI5MiwtNi41MjQ1MyAxMi4yMjkyLC0xNy4xNzcwN2MwLC0xMC42NTI1MyAtNC43MTI4LC0xNy4xNzcwNyAtMTIuMjI5MiwtMTcuMTc3MDdjLTcuNTE2NCwwIC0xMS45ODI2Nyw2LjQzODUzIC0xMS45ODI2NywxNy4xNzcwN3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=='
                                alt={'image icon'}
                            />
                            <span className='icon_text_left'>Username</span>
                            <span className='icon_text_right' id = "one">{props.username}</span>
                        </button>
                        <button className = "icon_inner"
                        type='button'
                        id='button'
                        onClick={() => {
                            if(props.edit){
                            
                            document.querySelector('.editWindow2').style.display="flex";
                            document.querySelector('.modal-content').style.background = "black";
                            document.querySelector('.modal-content').style.opacity = 0.25;}
  
                         }}
                        >

                            <img
                                className='imgicon'
                                src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iIzM0OThkYiI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04Niw0OS43MTg3NWMtMTcuMDY5MDUsMCAtMzAuOTA2MjUsMTMuODM3MiAtMzAuOTA2MjUsMzAuOTA2MjVjMCwxNy4wNjkwNSAxMy44MzcyLDMwLjkwNjI1IDMwLjkwNjI1LDMwLjkwNjI1YzE3LjA2OTA1LDAgMzAuOTA2MjUsLTEzLjgzNzIgMzAuOTA2MjUsLTMwLjkwNjI1YzAsLTE3LjA2OTA1IC0xMy44MzcyLC0zMC45MDYyNSAtMzAuOTA2MjUsLTMwLjkwNjI1ek04NiwxMjIuMjgxMjVjLTIwLjE1NjI1LDAgLTM5LjEwMzEyLDkuOTQyNyAtNTAuMzkwNjIsMjYuNDcwODNjLTIuMjg0MzcsMy4zNTkzOCAtMy4zNTkzNyw3LjI1Njc3IC0zLjM1OTM3LDExLjI4ODAyYzAsMi4xNSAxLjg4MTI1LDMuODk3NCA0LjAzMTI1LDMuODk3NGg5OS40Mzc1YzIuMTUsMCA0LjAzMTI1LC0xLjc0NzQgNC4wMzEyNSwtMy44OTc0YzAuMTM0MzgsLTQuMDMxMjUgLTEuMDc1LC04LjA2MzAyIC0zLjM1OTM3LC0xMS4yODgwMmMtMTEuMjg3NSwtMTYuNTI4MTMgLTMwLjIzNDM3LC0yNi40NzA4MyAtNTAuMzkwNjIsLTI2LjQ3MDgzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'
                                alt={'image icon'}
                            />
                            <span className='icon_text_left'>Nickname</span>
                            <span className='icon_text_right'>{props.nickname}</span>
                        </button>

                       
                        <button className = "icon_inner"
                        type='button'
                        id='button'
                        onClick={() => {
                            if(props.edit){
                            document.querySelector('.editWindow3').style.display="flex";
                            document.querySelector('.modal-content').style.background = "black";
                            document.querySelector('.modal-content').style.opacity = 0.25;}
  
                         }}
                        >
                            <img
                                className='imgicon'
                                src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik00Ni41ODMzMywxNTAuNWg3OC44MzMzM2MxMy44NTMxNywwIDI1LjA4MzMzLC0xMS4yMzAxNyAyNS4wODMzMywtMjUuMDgzMzN2LTc4LjgzMzMzYzAsLTEzLjg1MzE3IC0xMS4yMzAxNywtMjUuMDgzMzMgLTI1LjA4MzMzLC0yNS4wODMzM2gtNzguODMzMzNjLTEzLjg1MzE3LDAgLTI1LjA4MzMzLDExLjIzMDE3IC0yNS4wODMzMywyNS4wODMzM3Y3OC44MzMzM2MwLDEzLjg1MzE3IDExLjIzMDE3LDI1LjA4MzMzIDI1LjA4MzMzLDI1LjA4MzMzeiIgZmlsbD0iIzJlY2M3MSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjcuMDI5MTcsMTExLjIzMDI1bC0xNi41MjYzMywtMTAuOTMyNzVjLTIuMDE3NDIsLTEuMjIxOTIgLTQuNTQwMDgsLTEuMjQzNDIgLTYuNTc5LC0wLjA2MDkyYzAsMCAwLDAgLTcuMDg3ODMsNC4xMzE1OGMtMC45NDk1OCwwLjU1MTgzIC0xLjg2MzMzLDAuNjU1NzUgLTIuNjAxNSwwLjUxOTU4Yy0wLjkzODgzLC0wLjE3MiAtMS41ODM4MywtMC42ODQ0MiAtMS42MjY4MywtMC43MjAyNWMtMy44OTUwOCwtMi44NTU5MiAtOC40NDU5MiwtNi42MzYzMyAtMTMuMjk3NzUsLTExLjQ4NDU4Yy00Ljg0ODI1LC00Ljg0ODI1IC04LjYyODY3LC05LjM5OTA4IC0xMS40ODQ1OCwtMTMuMjk3NzVjLTAuMDMyMjUsLTAuMDQ2NTggLTAuNTQ4MjUsLTAuNjkxNTggLTAuNzIwMjUsLTEuNjI2ODNjLTAuMTMyNTgsLTAuNzM4MTcgLTAuMDMyMjUsLTEuNjQ4MzMgMC41MTk1OCwtMi42MDE1YzQuMTMxNTgsLTcuMDg3ODMgNC4xMzE1OCwtNy4wODc4MyA0LjEzMTU4LC03LjA4NzgzYzEuMTg2MDgsLTIuMDM4OTIgMS4xNjEsLTQuNTY1MTcgLTAuMDYwOTIsLTYuNTc5bC0xMC45MzI3NSwtMTYuNTI2MzNjLTEuMzU0NSwtMi4wNDYwOCAtNC4xMjQ0MiwtMi41ODcxNyAtNi4xNDE4MywtMS4xODk2N2MwLDAgLTUuMTc3OTIsMy41NDM5MiAtNi44ODcxNyw0Ljc0NzkyYy0yLjczNzY3LDEuOTI3ODMgLTMuNjE5MTcsNC44NTkgLTMuNjIyNzUsOC45NDRjLTAuMDA3MTcsNS43NDc2NyA0Ljk0NSwyMy43NTM5MiAyNS44MDM1OCw0NC42MTI1djB2MHYwdjBjMjAuODYyMTcsMjAuODYyMTcgMzguODY0ODMsMjUuODEwNzUgNDQuNjEyNSwyNS44MDM1OGM0LjA4NSwtMC4wMDM1OCA3LjAxNjE3LC0wLjg4ODY3IDguOTQ0LC0zLjYyMjc1YzEuMjA0LC0xLjcwOTI1IDQuNzQ3OTIsLTYuODg3MTcgNC43NDc5MiwtNi44ODcxN2MxLjM5NzUsLTIuMDE3NDIgMC44NiwtNC43ODczMyAtMS4xODk2NywtNi4xNDE4M3oiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=='
                                alt={'image icon'}
                            />
                            <span className='icon_text_left'>Nickname</span>
                            <span className='icon_text_right'>{props.telephone}</span>
                        </button>
                    </div> 
                </div>
            </div>
            
            <div className="editWindow1">
            <EditProfile edit = {true}  editText = "Change your name" close = '.editWindow1'></EditProfile>
            </div>

            <div className="editWindow2">
            <EditProfile edit = {true}  editText = "Change your nickname" close = '.editWindow2'></EditProfile>
            </div>

            <div className="editWindow3">
            <EditProfile edit = {true}  editText = "Change your telephone number" close = '.editWindow3'></EditProfile>
            </div>

   </>
    )
}


export default UserInfo;