import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.css';

export default function Loader() {
  return (
    <div className='spinner'>
      <Spinner animation='border' variant='light' />{' '}
      <div className='spinner-text'>Loading..</div>
    </div>
  );
}
