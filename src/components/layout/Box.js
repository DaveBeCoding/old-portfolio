import React from 'react';
import Image from './Image';

const Box = () => {
  return (
    <div className='card text-center'>
      <Image />

      <h3>Login</h3>
      <div>
        <a
          href='google.com'
          className='btn btn-dark btn-sm my-1
          '
        >
          More
        </a>
      </div>
    </div>
  );
};

export default Box;
