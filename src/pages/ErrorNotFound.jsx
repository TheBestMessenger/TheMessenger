import './ErrorNotFound.css';

import { Link } from 'react-router-dom';

const ErrorNotFound = () => {
  return (
    <>
      <h1 className='error-message'>404: Not Found :(</h1>
      <Link to='/'>
        <button className='get-back-btn'>Get Back</button>
      </Link>
    </>
  );
};

export default ErrorNotFound;
