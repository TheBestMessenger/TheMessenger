import './DMInput.css';

import React, {useEffect, useState} from 'react';
import Picker from 'emoji-picker-react';


const DMInput = (props) => {
    const {handleMessage, sendText, editMode, messageToEdit} = props;
    const [messageText, setMessageText] = useState('');
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [showEmoji, setShowEmoji] = useState(false);


    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        setMessageText(messageText + emojiObject.emoji)
    };

    const handleSubmit = () => {
        handleMessage(messageText);
        setMessageText('');
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    }

    useEffect(() => {
        if (editMode) {
            setMessageText(messageToEdit.msg);
        }
    }, [editMode]);

    return (
        <div className='input'>
            {showEmoji ? <div className={'picker'}>
                <Picker onEmojiClick={onEmojiClick}/>
            </div> : ''}
            <form className='form' onKeyPress={handleEnter}>
                <div className='cmd'>
                    <button className={'emoji-picker-button'} onClick={() => setShowEmoji(!showEmoji)}>
                        <img className={'emoji-picker-icon'} src={'/icons/emoji.png'} alt={'emoji-picker icon'}/>
                    </button>
                    <textarea
                        className='texta'
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                    />
                </div>
                <button
                    className='btn'
                    type='submit'
                    value='Submit'
                    onClick={handleSubmit}
                >
                    {sendText}
                </button>
            </form>
        </div>);
};

export default DMInput;