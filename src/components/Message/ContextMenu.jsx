import './ContextMenu.css'

const ContextMenu = () => {
    function editButton() {
        console.log('edit');
    }

    function copyButton() {
        console.log('copy');
    }

    function deleteButton() {
        console.log('delete');
    }

    return (
        <>
            <div className={'message-context-menu'}>
                <button className={'message-context-menu-button'} onClick={editButton}>
                    <img className={'icon'} src={`/icons/edit-message.svg`} alt={'edit icon'}/>
                    <p>Edit</p>
                </button>

                <button className={'message-context-menu-button'} onClick={copyButton}>
                    <img className={'icon'} src={`/icons/copy-icon.svg`} alt={'copy icon'}/>
                    <p>Copy</p>
                </button>

                <button className={'message-context-menu-button'} onClick={deleteButton}>
                    <img className={'icon'} src={`/icons/trash-icon.svg`} alt={'delete icon'}/>
                    <p>Delete</p>
                </button>
            </div>
        </>
    )
}

export default ContextMenu;
