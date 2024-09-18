import React, { useEffect } from 'react';
import { BrowserOpenURL } from '../../wailsjs/runtime';

const Footer = () => {
  return (
    <footer className='mt-3 text-gray-600 text-xs text-center'>
      Made by{' '}
      <span
        onClick={() => BrowserOpenURL('https://github.com/cateruu')}
        className='text-blue-900 cursor-pointer'
      >
        cateruu
      </span>
      , GitHub repo is{' '}
      <span
        onClick={() => BrowserOpenURL('https://github.com/cateruu/RaceSync')}
        className='text-blue-900 cursor-pointer'
      >
        here
      </span>
    </footer>
  );
};

export default Footer;
