import './DMInput.css';

import React, {useState} from 'react';
import Picker from 'emoji-picker-react';


const DMInput = (props) => {
    const {handleMessage, sendText} = props;
    const [messageText, setMessageText] = useState('');
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    const handleSubmit = () => {
        handleMessage(messageText);
        setMessageText('');
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    }

    let show = false;

    return (
        <div className='input'>
            <div className={'picker'}>
                {show ? <Picker onEmojiClick={onEmojiClick}/> : ''}
            </div>
            <form className='form' onKeyPress={handleEnter}>
                <div className='cmd'>
                    <button className={'emoji-picker-button'} onClick={() => show = !show}>
                        <img className={'emoji-picker-icon'} src={'/icons/emoji-icon.svg'} alt={'emoji-picker icon'}/>
                    </button>
                    <textarea
                        className='texta'
                        value={messageText} //+ chosenEmoji.emoji
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
        </div>
    );
};

export default DMInput;
