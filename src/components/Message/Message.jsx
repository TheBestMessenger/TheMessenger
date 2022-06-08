import './Message.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
const reactStringReplace = require('react-string-replace');

const Message = (props) => {
  const { text, fromMe, time, edited, message_id } = props;

  const taggedText = reactStringReplace(
    text,
    /(@[a-zA-Z_0-9]+)/g,
    (match, i) => (
      <Link key={i} to={`/dm/${match.slice(1)}`} className='link-color'>
        {match}
      </Link>
    )
  );

  let read = false;
  if (fromMe) {
    return (
      <>
        <Fade right duration={250}>
          <div className={'message out-message'} message_id={message_id}>
            <p className={'message message-text-container'}> {taggedText} </p>
            <span className={'message message-time message-time-out'}>
              {' '}
              {`${edited ? 'edited' : ''} ${time}`}{' '}
              <img
                className={'message-tick-icon'}
                src={`/icons/${read ? 'read' : 'delivered'}.svg`}
                alt={'tick icon'}
              />{' '}
            </span>
          </div>
        </Fade>
      </>
    );
  } else {
    return (
      <>
        <Fade left duration={250}>
          <div className={'message in-message'}>
            <p className={'message message-text-container'}> {taggedText} </p>
            <span className={'message message-time message-time-in'}>
              {' '}
              {`${edited ? 'edited' : ''} ${time}`}{' '}
            </span>
          </div>
        </Fade>
      </>
    );
  }
};

export default Message;
