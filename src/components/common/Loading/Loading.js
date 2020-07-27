import React from 'react';
import './Loading.css';

export default function Loading({ loadingText }) {
  return (
    <div className='loading-content'>
      <h1 className='loading-text'>{loadingText}</h1>
    </div>
  );
}
