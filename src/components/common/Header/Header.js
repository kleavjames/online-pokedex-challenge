import React from 'react';
import './Header.css';

export default function Header({ headerTitle }) {
  return (
    <header className='header'>
      <p className='header-text'>{headerTitle}</p>
    </header>
  );
}
