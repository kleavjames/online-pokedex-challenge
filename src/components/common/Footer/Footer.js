import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div>
        <p className='footer-text text-1'>
          Copyright &copy; 2020 React Code Challenge. All Rights Reserved.
        </p>
        <p className='footer-text text-2'>
          Use of pokemon images performed under fair use. Not for sale or
          redistribution.
        </p>
      </div>
    </footer>
  );
}
