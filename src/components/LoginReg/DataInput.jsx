import './DataInput.css';
import { useState } from 'react';
import Subtitle from './Subtitle';

const DataInput = (props) => {
  let clas = '';

  const [eyeUrl, setEyeUrl] = useState(true);

  if (
    props.info !== 'Password' &&
    props.info !== 'Password Check' &&
    props.error === ''
  ) {
    clas = 'sign-input';
    return (
      <>
        <div className={clas}>
          <input
            value={props.value}
            onChange={props.onChange}
            type='text'
            id={props.info}
            required
          />
          <label className='sign-label'>{props.info}</label>
        </div>
      </>
    );
  } else if (props.info !== 'Password' && props.info !== 'Password Check') {
    clas = 'sign-input-err';
    return (
      <>
        <div className={clas}>
          <input
            value={props.value}
            onChange={props.onChange}
            type='text'
            id={props.info}
            required
          />
          <label className='sign-label'>{props.info}</label>
        </div>
        <Subtitle text={props.error} error={1} />
      </>
    );
  } else if (props.error === '') {
    clas = 'sign-input-pass';
    return (
      <>
        <div className={clas}>
          <input
            value={props.value}
            onChange={props.onChange}
            type={eyeUrl ? 'password' : 'text'}
            id={props.info}
            required
          />
          <label className='sign-label'>{props.info}</label>
          <img
            className='show-button'
            src={eyeUrl ? 'eye.png' : 'not-eye.png'}
            onClick={() => setEyeUrl((prev) => !prev)}
            alt='logo'
          />
        </div>
      </>
    );
  } else {
    clas = 'sign-input-pass-err';
    return (
      <>
        <div className={clas}>
          <input
            value={props.value}
            onChange={props.onChange}
            type={eyeUrl ? 'password' : 'text'}
            id={props.info}
            required
          />
          <label className='sign-label'>{props.info}</label>
          <img
            className='show-button'
            src={eyeUrl ? 'eye.png' : 'not-eye.png'}
            onClick={() => setEyeUrl((prev) => !prev)}
            alt='logo'
          />
        </div>
        <Subtitle text={props.error} error={1} />
      </>
    );
  }
};

export default DataInput;
