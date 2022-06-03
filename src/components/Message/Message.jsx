import './Message.css';

const Message = (props) => {
  const { text, fromMe, time, edited, message_id } = props;
  let read = false;
  if (fromMe) {
    return (
      <>
        <div className={'message out-message'} message_id={message_id}>
          <p className={'message message-text-container'}> {text} </p>
          <span className={'message message-time'}>
            {' '}
            {`${edited ? 'Edited' : ''} ${time}`}{' '}
            <img
              className={'message-tick-icon'}
              src={`/icons/${read ? 'read' : 'delivered'}.svg`}
              alt={'tick icon'}
            />{' '}
          </span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={'message in-message'}>
          <p className={'message message-text-container'}> {text} </p>
          <span className={'message message-time'}>
            {' '}
            {`${edited ? 'Edited' : ''} ${time}`}{' '}
          </span>
        </div>
      </>
    );
  }
};

export default Message;
