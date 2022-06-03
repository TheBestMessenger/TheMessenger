import './DMInput.css';

import { useState } from 'react';

const DMInput = (props) => {
  const { handleMessage, sendText } = props;
  const [messageText, setMessageText] = useState('');

  const handleSubmit = () => {
    handleMessage(messageText);
    setMessageText('');
  };

  return (
    <div className='input'>
      <form className='form'>
        <div className='cmd'>
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
    </div>
  );
};

export default DMInput;
