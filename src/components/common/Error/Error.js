import React from 'react';
import './Error.css';

export default function Error({ errorText }) {
  return (
    <div className='error-content'>
      <h1 className='error-text'>{errorText}</h1>
    </div>
  );
}
